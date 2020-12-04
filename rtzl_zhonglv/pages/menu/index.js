import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Toast from '../../components/Toast';
import {preReceive, putupData, run} from '../../core/common.js';

const pageUri = 'file:///android_asset/h5/menu/index.html';

const onReceive = (etype, _this, receivedData) => {
	const {
		navigation,
		navigation: {navigate},
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Default;
