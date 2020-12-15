import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Toast from '../../components/Toast';
import Confirm from '../../components/Confirm';
import {preReceive, putupData, run} from '../../core/common.js';
import {connect} from 'react-redux';
import {login} from '../../redux/actions.js';

const pageUri = 'file:///android_asset/h5/menu/index.html';

const onReceive = (etype, _this, receivedData) => {
	const {
		navigation,
		navigation: {navigate},
		login,
	} = _this.props;
	switch (etype) {
		case 'componentDidMount':
			Toast.show('componentDidMount');
			break;
		case 'back-btn':
			navigation.goBack();
			break;
		case 'input':
			Toast.show('input');
			navigate('input');
			break;
		case 'settings':
			navigate('config');
			break;
		case 'cancellation':
			_this.refs.confirm.show('确认要退出登录吗？', () => {
				login(false);
			});
			break;
		default:
			return;
	}
};

class Default extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<View style={styles.container}>
				<WebView
					ref="webview"
					source={{uri: pageUri}}
					onMessage={(e) => preReceive(e, this, onReceive)}
				/>
				<Confirm ref="confirm" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const mapDispatchToProps = (dispatch, props) => {
	return {
		login: (bool) => {
			dispatch(login(bool));
		},
	};
};

export default connect(null, mapDispatchToProps)(Default);
