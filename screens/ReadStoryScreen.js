import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Image } from 'react-native';

import db from '../config';
import { FlatList } from 'react-native-gesture-handler';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			allStories: [],
			showStories: [],
		};
	}

	updateSearch = (search) => {
		this.setState(
			{
				showStories: [],
				search: search,
			},
			() => {
				if (this.state.search.length === 0) {
					console.log(this.state.search.length);
					this.setState({
						showStories: this.state.allStories,
					});
				} else {
					for (var index in this.state.allStories) {
						var storyData = this.state.allStories[index];
						for (var element in storyData) {
							var stringVal = storyData[element];
							for (var strIndex in this.state.search) {
								if (this.state.search[strIndex] === stringVal[strIndex]) {
									if (parseInt(strIndex) === parseInt(this.state.search.length) - 1) {
										console.log('Match Found: ' + stringVal);
										this.setState({
											showStories: [...this.state.showStories, storyData],
										});
									}
								}
							}
						}
					}
				}
			}
		);
	};

	retriveStories = async () => {
		var allStories = await db.collection('stories').get();
		allStories.docs.map((doc) => {
			var story = doc.data();
			this.setState(
				{
					allStories: [...this.state.allStories, story],
				},
				() => {
					this.setState({
						showStories: this.state.allStories,
					});
				}
			);
		});
		console.log(this.state.showStories);
	};

	componentDidMount() {
		this.retriveStories();
	}

	render() {
		const { search } = this.state;

		return (
			<View style={styles.viewComp}>
				<SearchBar placeholder='Type Here...' onChangeText={this.updateSearch} value={search} />

				<FlatList
					style={{ marginTop: 25 }}
					data={this.state.showStories}
					renderItem={({ item }) => (
						<View style={{ borderWidth: 2, marginBottom: 10 }}>
							<Text>{'Title: ' + item.bookName}</Text>
						</View>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewComp: {
		marginTop: 25,
	},
});
