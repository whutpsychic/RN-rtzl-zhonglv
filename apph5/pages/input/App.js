import React from "react";
import "./App.css";
import Body from "../components/Body/index";
import util from "../util/index";
// --------------------
import { FormOutlined } from "@ant-design/icons";
import PageLoading from "../UI/PageLoading/index";
import TopTitle from "../UI/TopTitle";
import TopSearcher from "../UI/TopSearcher";
import List from "../components/List/index";
// --------------------
import { treeData, listData } from "./faker.js";

const debugging = false;

const { renderListItem } = List;

class Default extends React.Component {
	state = {
		pageLoading: false,
		title: "",
		numbers: treeData,
		ListItems: listData
	};

	componentDidMount() {
		util.traceBack("componentDidMount");
		util.init(this);
	}

	render() {
		const conditionList = [
			{
				label: "选择槽号",
				field: "number",
				type: "selecttree",
				data: this.state.numbers
			},
			{
				label: "时间",
				field: "date",
				type: "date",
				clearable: true
			}
		];
		const btns = [
			{
				label: "提交",
				func: this.onClickSubmit
			}
		];
		const { pageLoading, title, ListItems } = this.state;
		return (
			<Body>
				<TopTitle title="生产数据录入" canBack />
				{pageLoading ? <PageLoading /> : null}
				<p className="title">{`槽号：${title ? title : "未选择"}`}</p>
				<TopSearcher
					conditionList={conditionList}
					onClickQuery={this.onQuery}
					forMoreText="选择槽号和时间"
					noinput
				/>
				<List btns={btns} ref="list">
					{ListItems.map((item, i) => {
						return renderListItem(item, i);
					})}
				</List>
			</Body>
		);
	}

	onQuery = condition => {
		util.traceBack("onChangeConditions", condition);
	};

	onClickSubmit = () => {
		const valueArr = this.refs.list.getValue(this);
		util.traceBack("submit", valueArr);
	};
}

export default Default;
