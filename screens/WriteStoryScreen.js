import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			storyName: '',
			authorName: '',
			story: '',
		};
	}
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

				<TextInput
					placeholder='Title of the Story'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						marginTop: 25,
						width: 300,
						height: 35,
						alignSelf: 'center',
						textAlign: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							storyName: text,
						});
					}}
					value={this.state.storyName}
				/>

				<TextInput
					placeholder='Author Name'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						width: 300,
						height: 35,
						alignSelf: 'center',
						textAlign: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							authorName: text,
						});
					}}
					value={this.state.authorName}
				/>

				<TextInput
					placeholder='Story'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						width: 400,
						height: 200,
						alignSelf: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							story: text,
						});
					}}
					value={this.state.story}
					multiline={true}
				/>

				<TouchableOpacity style={styles.submitButton}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	submitButton: {
		borderWidth: 2,
		backgroundColor: 'red',
	},
});
