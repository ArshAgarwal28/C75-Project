import * as React from 'react';
import { Image } from 'react-native';
import { createBottomNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from '../screens/WriteStoryScreen';
import ReadStoryScreen from '../screens/ReadStoryScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const BottomTab = createBottomTabNavigator(
	{
		Write: { screen: WriteStoryScreen },
		Read: { screen: ReadStoryScreen },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: () => {
				const routeName = navigation.state.routeName;
				if (routeName === 'Write') {
					return (
						<Image source={require('../assets/write.png')} style={{ width: 40, height: 40 }} />
					);
				} else if (routeName === 'Read') {
					return <Image source={require('../assets/read.png')} style={{ width: 40, height: 40 }} />;
				}
			},
		}),
	}
);
