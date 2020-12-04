const util = {};

// ============================================================
//通向RN端
//信息传输
//字符串表示简单信息(生命周期相关)
//对象
// {type:"string",content:"xxxxxxxxxxxxxxxxxxxxxx"}----------回传一个字符串
// {type:"navigation",path:"xxxxxxxxxxx",params:{}}----------带参数跳转到某页面
// {type:"event",params:{}}----------------------------------带参数触发某事件

util.traceBack = (etype, info) => {
  if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
    if (typeof info === "string") {
      window.ReactNativeWebView.postMessage(JSON.stringify({ etype, info }));
    } else if (!info) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ etype }));
    } else {
      window.ReactNativeWebView.postMessage(JSON.stringify({ etype, ...info }));
    }
  }
};

util.init = _this => {
  //监听事件以及时读取RN传回的数据
  document.addEventListener("message", event => {
    let res = JSON.parse(event.data);
    if (res.etype === "data") {
      let obj = { ...res };
      delete obj.etype;
      _this.setState({
        ...obj
      });
    } else if (res.etype === "event") {
      let { event, args } = res;
      if (typeof _this[event] === "function") _this[event](args);
    }
  });
};
// ============================================================

//
util.dateToString = (startDate, endDate) => {
  if (!startDate) {
    alert("没有一个日期");
    return "";
  }

  let sy = startDate.getFullYear();
  let sm = startDate.getMonth() + 1;
  let sd = startDate.getDate();
  let result = sy + "/" + util.mendUpNumber(sm) + "/" + util.mendUpNumber(sd);

  if (endDate) {
    let ey = endDate.getFullYear();
    let em = endDate.getMonth() + 1;
    let ed = endDate.getDate();
    result +=
      " 至 " + ey + "/" + util.mendUpNumber(em) + "/" + util.mendUpNumber(ed);
  }

  return result;
};

//
util.executeNumber = num => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

export default util;
