import * as React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			userID: '',
			userPassword: '',
		};
	}

	loginUser = async () => {
		try {
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(this.state.userID, this.state.userPassword);
			if (response) {
				this.props.navigation.navigate('Tab');
			}
		} catch (error) {
			alert('Wrong Password or Email ID');
			console.log(error);
		}
	};

	render() {
		return (
			<View style={{ flex: 1, marginTop: 25 }}>
				<TextInput
					style={styles.inputStyle}
					placeholder='Email Account'
					onChangeText={(text) => {
						this.setState({
							userID: text,
						});
					}}
					value={this.state.userID}
				/>
				<TextInput
					secureTextEntry={true}
					style={styles.inputStyle}
					placeholder='Password'
					onChangeText={(text) => {
						this.setState({
							userPassword: text,
						});
					}}
					value={this.state.userPassword}
				/>
				<TouchableOpacity onPress={this.loginUser} style={styles.buttonStyle}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputStyle: {
		borderWidth: 2,
		marginBottom: 25,
		width: 300,
		height: 35,
		alignSelf: 'center',
		textAlign: 'center',
	},

	buttonStyle: {
		borderWidth: 2,
		backgroundColor: 'red',
		padding: 5,
		textAlign: 'center',
		alignSelf: 'center',
	},
});
