import React, {Fragment} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles.js';
import {connect} from 'react-redux';
import {login} from '../../redux/actions.js';
import Toast from '../../components/Toast';
import Tips from '../../components/Tips';
import storage from '../../core/storage.js';
import api from '../../api/index';

import bg from './bg.png';
import account from './account.png';
import psw from './psw.png';

class Default extends React.Component {
  state = {
    name: '',
    key: '',
  };

  componentDidMount() {
    //自动添加
    let p1 = storage.getData('zhonglv_userName');
    let p2 = storage.getData('zhonglv_psw');

    Promise.all([p1, p2]).then((resArr) => {
      console.log(resArr);
      if (
        resArr[0] &&
        resArr[0] !== 'null' &&
        resArr[1] &&
        resArr[1] !== 'null'
      ) {
        this.setState({
          name: resArr[0],
          key: resArr[1],
        });
      }
    });
  }

  render() {
    const {name, key} = this.state;
    const {container, bgimg, form, formItem, formInput} = styles;
    const {formItemBorder, inputIcon, btn, btnText} = styles;
    return (
      <Fragment>
        <View style={container}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.refs.account.blur();
              this.refs.psw.blur();
            }}>
            <Image style={bgimg} alt="" source={bg} resizeMode={'contain'} />
          </TouchableWithoutFeedback>
          <View style={form}>
            <View style={[formItem, formItemBorder]}>
              <Image alt="" source={account} style={inputIcon} />
              <TextInput
                ref="account"
                style={[formInput]}
                value={name}
                placeholder="请输入账号"
                onChangeText={(value) => {
                  this.setState({name: value});
                }}
              />
            </View>
            <View style={[formItem, formItemBorder]}>
              <Image alt="" source={psw} style={inputIcon} />
              <TextInput
                ref="psw"
                style={[formInput]}
                value={key}
                secureTextEntry={true}
                placeholder="请输入密码"
                onChangeText={(value) => {
                  this.setState({key: value});
                }}
              />
            </View>
            <TouchableOpacity
              style={[formItem, btn]}
              onPress={() => {
                const {name, key} = this.state;
                this.login({name, key});
              }}>
              <Text style={btnText}>登录</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Tips ref="tips" />
      </Fragment>
    );
  }

  error = (txt) => {
    Toast.show(txt);
    this.refs.tips.hide();
  };

  login = ({name, key}) => {
    this.refs.tips.modal('正在登录...');
    const {login} = this.props;
    api.login(name, key).then((res) => {
      console.log(res);
      const {errcode, errmsg, data} = res;
      //成功
      if (!errcode && data) {
        // 记住身份
        let p1 = storage.setData('zhonglv_userName', name);
        let p2 = storage.setData('zhonglv_psw', key);

        Promise.all([p1, p2]).then((resArr) => {
          this.refs.tips.hide();
          Toast.show('登录成功');
          login(true);
          return;
        });
      }
      // 超时
      // else if (!ok && status === 504) {
      //   login(false);
      //   Toast.show('登录超时，请稍后重试');
      //   return;
      // }

      // 错误
      else {
        this.error(errmsg);
        return;
      }
    });
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (bool) => {
      dispatch(login(bool));
    },
  };
};

export default connect(null, mapDispatchToProps)(Default);
