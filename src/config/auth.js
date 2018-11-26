import { FBLoginManager } from 'react-native-facebook-login';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

const Facebook = {
  login: (permissions) => {
    return new Promise((resolve, reject) => {
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
        if (!error) {
          resolve(data.credentials.token);
          console.log(data.credentials.token);
            alert(data.credentials.token+"you clicked me");
            Actions.register();
        } else {
          reject(error);

        }
      });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      FBLoginManager.logout((error, data) => {
        if (!error) {
          resolve(true);

          console.log("logout1");
        } else {

          reject(error);
            console.log("logout2");
        }
      });
    });
  }
}

const Auth = { Facebook };

export default Auth;
