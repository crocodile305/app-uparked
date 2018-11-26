import RNFirebase from 'react-native-firebase'

const configurationOptions = {
  debug:false,
  //   apiKey: "AIzaSyA4sxec7t3r1Hcw1DQ-cFvuBcbO8jLhDew",
  // // appId: "1:42340102824:android:6cc966c95a3da6c2",
  //   authDomain: "uparked1.firebaseapp.com",
  // databaseURL: "https://uparked1.firebaseio.com",
  // messagingSenderId: "42340102824",
  // projectId: "uparked1",
  // storageBucket: "uparked1.appspot.com",

}

const firebase = RNFirebase.initializeApp(configurationOptions)

export default firebase
