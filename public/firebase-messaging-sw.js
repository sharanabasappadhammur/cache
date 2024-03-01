/* eslint-disable */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyAOjuIjHweo1jM1Dl6aVHRTnQGM8FUVLtk',
  appId: '1:138705464334:web:1e1576d9f7bd9af462e05f',
  authDomain: 'coffeeweb-354711.firebaseapp.com',
  databaseURL: 'https://coffeeweb-354711-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'coffeeweb-354711',
  messagingSenderId: '138705464334',
  measurementId: 'G-432F4XZMEW',
  storageBucket: 'coffeeweb-354711.appspot.com'
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  // console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);

// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// // Initialize the Firebase app in the service worker by passing the generated config

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./firebase-messaging-sw.js')
//         .then(function (registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         }).catch(function (err) {
//             console.log('Service worker registration failed, error:', err);
//         });
// }

// firebase.initializeApp({

//     // apiKey: "AIzaSyAOjuIjHweo1jM1Dl6aVHRTnQGM8FUVLtk",
//     // authDomain: "coffeeweb-354711.firebaseapp.com",
//     // databaseURL: "https://coffeeweb-354711-default-rtdb.asia-southeast1.firebasedatabase.app",
//     // projectId: "coffeeweb-354711",
//     // storageBucket: "coffeeweb-354711.appspot.com",
//     // messagingSenderId: "138705464334",
//     // appId: "1:138705464334:web:1e1576d9f7bd9af462e05f",
// });

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onMessage(function (payload) {
//     console.log('Received background message ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.ServiceWorkerRegistration.showNotification(notificationTitle,
//         notificationOptions);
// });
// // if ('serviceWorker' in navigator) {
// //   navigator.serviceWorker.register('../firebase-messaging-sw.js')
// //     .then(function(registration) {
// //       console.log('Registration successful, scope is:', registration.scope);
// //     }).catch(function(err) {
// //       console.log('Service worker registration failed, error:', err);
// //     });
// //   }
