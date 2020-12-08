import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

// ===================================== //
import Logo from './pages/logo/index';
import Login from './pages/login/index';
import Config from './pages/config/index';
// -------------------------------------------
import Menu from './pages/menu/index';
import Input from './pages/input/index';
// -------------------------------------------

// -------------------------------------------

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    const {initializing, isLogin} = this.props;
    return (
      <NavigationContainer>
        {/*<StatusBar translucent={false} />*/}
        <Stack.Navigator initialRouteName="main" headerMode="none">
          {initializing ? (
            <Stack.Screen name="logo" component={Logo} />
          ) : isLogin ? (
            <Fragment>
              <Stack.Screen name="menu" component={Menu} />
              <Stack.Screen name="input" component={Input} />
            </Fragment>
          ) : (
            <Fragment>
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="config" component={Config} />
            </Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(App);
