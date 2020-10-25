import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { BottomTab } from './components/tabNavigator';
import LoginScreen from './screens/loginScreen';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AppContainer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 35,
		backgroundColor: '#fff',
	},
});

const switchNavigator = createSwitchNavigator({
	Login: { screen: LoginScreen },
	Tab: { screen: BottomTab },
});
const AppContainer = createAppContainer(switchNavigator);
