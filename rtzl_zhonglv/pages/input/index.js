import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Toast from '../../components/Toast';
import {preReceive, putupData, run} from '../../core/common.js';
import buildListItems from './inputList.js';
import api from '../../api/index';
import Tips from '../../components/Tips';

const pageUri = 'file:///android_asset/h5/input/index.html';

const onReceive = (etype, _this, receivedData) => {
	const {
		navigation,
		navigation: {navigate},
	} = _this.props;
	switch (etype) {
		case 'componentDidMount':
			// 获取树数据
			api.getInstitutionsTree().then((res) => {
				console.log(res);
				if (!res.errcode)
					putupData(_this, {
						pageLoading: false,
						numbers: res.data[0].children,
					});
			});

			let ListItems = buildListItems(buildListItems.data);
			putupData(_this, {
				ListItems,
			});
			Toast.show('componentDidMount');
			break;

		case 'onChangeConditions':
			const {number, date} = receivedData;
			if (date)
				_this.setState({
					date,
				});
			if (number) {
				_this.setState({
					number: number.code,
				});
				putupData(_this, {
					title: number.code,
				});
			}

			api.getDefaultValues(date, number.code).then((res) => {
				console.log(res);
				const defaultValues = res.data.list[0];
				// 数据转换
				const defaultValuesArr = [];
				defaultValuesArr.push(defaultValues.fenzibi);
				defaultValuesArr.push(defaultValues.cellt);
				defaultValuesArr.push(defaultValues.allevel);
				defaultValuesArr.push(defaultValues.djzlevel);
				defaultValuesArr.push(defaultValues.outalzhishi);
				defaultValuesArr.push(defaultValues.planoutal);
				defaultValuesArr.push(defaultValues.outal);
				defaultValuesArr.push(defaultValues.fe);
				defaultValuesArr.push(defaultValues.si);
				defaultValuesArr.push(defaultValues.al2o3nd);
				defaultValuesArr.push(defaultValues.caf2);
				defaultValuesArr.push(defaultValues.kf);
				defaultValuesArr.push(defaultValues.lif);
				defaultValuesArr.push(defaultValues.cebit);
				defaultValuesArr.push(defaultValues.al);
				defaultValuesArr.push(defaultValues.mgf2);
				defaultValuesArr.push(defaultValues.ludiu);
				defaultValuesArr.push(defaultValues.ca);
				defaultValuesArr.push(defaultValues.mg);
				defaultValuesArr.push(defaultValues.al2o3na);
				defaultValuesArr.push(defaultValues.al2o3jian);
				defaultValuesArr.push(defaultValues.al2o3lidu);
				defaultValuesArr.push(defaultValues.ludit);
				defaultValuesArr.push(defaultValues.lubangh);
				defaultValuesArr.push(defaultValues.altotal);
				defaultValuesArr.push(defaultValues.baowenh);
				defaultValuesArr.push(defaultValues.naalf);
				defaultValuesArr.push(defaultValues.jiju);
				defaultValuesArr.push(defaultValues.jukuainum);
				defaultValuesArr.push(defaultValues.chujingt);
				defaultValuesArr.push(defaultValues.guoredu);

				let ListItems = buildListItems(buildListItems.data, defaultValuesArr);
				console.log(ListItems);
				putupData(_this, {ListItems: []});
				putupData(_this, {ListItems});
			});

			break;

		// ================提交==================
		case 'submit':
			{
				const {date, number} = _this.state;
				if (!number) {
					_this.refs.tips.show('请选择槽号');
					return;
				} else if (!date) {
					_this.refs.tips.show('请选择时间');
					return;
				}
				_this.refs.tips.modal('正在提交...');

				const conditions = {
					cellNum: number,
					productDate: date,
					fenzibi: receivedData[0],
					cellt: receivedData[1],
					allevel: receivedData[2],
					djzlevel: receivedData[3],
					outalzhishi: receivedData[4],
					planoutal: receivedData[5],
					outal: receivedData[6],
					fe: receivedData[7],
					si: receivedData[8],
					al2o3nd: receivedData[9],
					caf2: receivedData[10],
					kf: receivedData[11],
					lif: receivedData[12],
					cebit: receivedData[13],
					al: receivedData[14],
					mgf2: receivedData[15],
					ludiu: receivedData[16],
					ca: receivedData[17],
					mg: receivedData[18],
					al2o3na: receivedData[19],
					al2o3jian: receivedData[20],
					al2o3lidu: receivedData[21],
					ludit: receivedData[22],
					lubangh: receivedData[23],
					altotal: receivedData[24],
					baowenh: receivedData[25],
					naalf: receivedData[26],
					jiju: receivedData[27],
					jukuainum: receivedData[28],
					chujingt: receivedData[29],
					guoredu: receivedData[30],
				};
				api.postData(conditions).then((res) => {
					console.log(res);
					const {errmsg} = res;
					Toast.show(errmsg || '未知的错误');
					_this.refs.tips.hide();
				});
			}
			break;
		case 'back-btn':
			navigation.goBack();
			break;
		default:
			return;
	}
};

class Default extends React.Component {
	state = {
		date: null,
		number: null,
	};

	componentDidMount() {}

	render() {
		return (
			<KeyboardAvoidingView
				keyboardVerticalOffset={30}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.container}>
				<WebView
					ref="webview"
					source={{uri: pageUri}}
					onMessage={(e) => preReceive(e, this, onReceive)}
				/>
				<Tips ref="tips" />
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Default;
