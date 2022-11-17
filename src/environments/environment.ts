// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'carsandbids-app',
    appId: '1:635555651293:web:6e3799d15e33133a8d4534',
    databaseURL: 'https://carsandbids-app-default-rtdb.firebaseio.com',
    storageBucket: 'carsandbids-app.appspot.com',
    apiKey: 'AIzaSyCIAR5b1pn4hSqkQtp9UaXtynxHpIvIJOU',
    authDomain: 'carsandbids-app.firebaseapp.com',
    messagingSenderId: '635555651293',
    measurementId: 'G-ZBRRBTPBG6',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCIAR5b1pn4hSqkQtp9UaXtynxHpIvIJOU",

  authDomain: "carsandbids-app.firebaseapp.com",

  databaseURL: "https://carsandbids-app-default-rtdb.firebaseio.com",

  projectId: "carsandbids-app",

  storageBucket: "carsandbids-app.appspot.com",

  messagingSenderId: "635555651293",

  appId: "1:635555651293:web:6e3799d15e33133a8d4534",

  measurementId: "G-ZBRRBTPBG6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);