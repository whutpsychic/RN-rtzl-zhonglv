import React from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import storage from '../../core/storage.js';
import Toast from '../../components/Toast';
import {Button} from '@ant-design/react-native';

class Default extends React.Component {
	state = {
		value1: '',
		value2: '',
	};

	componentDidMount() {
		storage.getData('zhonglv_URL').then((res) => {
			this.setState({
				value1: res,
			});
		});
		storage.getData('zhonglv_Port').then((res) => {
			this.setState({
				value2: res,
			});
		});
	}

	render() {
		const {navigation} = this.props;
		const {value1, value2} = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.topTitle}>
					<Text style={styles.topTitleText}>自定义请求地址</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}>
						<Text style={styles.backBtn}>{'<'}</Text>
					</TouchableOpacity>
				</View>
				<TextInput
					value={value1}
					placeholder="设置地址"
					style={styles.input}
					onChangeText={(value) => this.setState({value1: value})}
				/>
				<TextInput
					value={value2}
					placeholder="设置端口号"
					style={styles.input}
					onChangeText={(value) => this.setState({value2: value})}
				/>
				<Button style={styles.btn} type="primary" onPress={this.confirm}>
					确定
				</Button>
				<Button
					style={styles.btn}
					type="primary"
					onPress={() => this.setState({value1: '', value2: ''})}>
					重置
				</Button>
			</View>
		);
	}

	confirm = () => {
		const {navigation} = this.props;
		const {value1, value2} = this.state;
		let p1 = storage.setData('zhonglv_URL', value1);
		let p2 = storage.setData('zhonglv_Port', value2);
		Promise.all([p1, p2]).then((resArr) => {
			Toast.show('修改成功');
			navigation.goBack();
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topTitle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	topTitleText: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: 50,
		lineHeight: 50,
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 1,
		backgroundColor: '#389edc',
		color: '#fff',
		textAlign: 'center',
	},
	backBtn: {
		fontSize: 30,
		color: '#fff',
		marginHorizontal: 20,
	},
	input: {
		marginTop: 20,
		marginHorizontal: 20,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},
	btn: {
		marginTop: 20,
		marginHorizontal: 20,
	},
});

export default Default;
