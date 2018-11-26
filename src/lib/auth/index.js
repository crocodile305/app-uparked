import { fbLoginPermissions } from '../../constants/index';
// import firebase from '../../config/firebase';
import Auth from '../../config/auth';
import firebase from 'react-native-firebase';


export const handleFbLogin = () => (

  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
        // var a = firebase.auth.FacebookAuthProvider.credential(token);
        // alert(JSON.stringify(a)+"=====");
      firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token));


    })
    .catch((err) => this.onError && this.onError(err))
);
