import React from "react";
import "./App.css";
import Body from "../components/Body/index";
import util from "../util/index";
// --------------------
import TopTitle from "../UI/TopTitle/index";
import { FormOutlined } from "@ant-design/icons";

class Default extends React.Component {
	render() {
		return (
			<Body>
				<TopTitle title="主菜单" />
				<div className="menu-block" onClick={() => util.traceBack("input")}>
					<FormOutlined />
					<p>数据录入</p>
				</div>
			</Body>
		);
	}
}

export default Default;
