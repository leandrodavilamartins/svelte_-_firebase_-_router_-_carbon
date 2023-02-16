import App from './App.svelte';
import { initializeApp } from '../node_modules/firebase/app';
import { getFirestore } from '../node_modules/firebase/firestore';

const firebaseConfig={
	// config data 
}

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase); 

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export {db,app};
