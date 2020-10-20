import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyDqMwe56DpnlqIgRxvEPOLQFTxW206pZOs',
	authDomain: 'bedtimestories-cec57.firebaseapp.com',
	databaseURL: 'https://bedtimestories-cec57.firebaseio.com',
	projectId: 'bedtimestories-cec57',
	storageBucket: 'bedtimestories-cec57.appspot.com',
	messagingSenderId: '114299420765',
	appId: '1:114299420765:web:aefca089a5be2f0a024db4',
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
