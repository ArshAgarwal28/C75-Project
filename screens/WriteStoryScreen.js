import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
	render() {
		return (
			<View>
				<Header
					backgroundColor={'#34abeb'}
					centerComponent={{
						text: 'Write a Story',
						style: { color: '#FFF', fontSize: 20 },
					}}
				/>
				<Text> Write Story Screen</Text>
			</View>
		);
	}
}
