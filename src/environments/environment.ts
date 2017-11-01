// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCQ1s5nFwNQBcehfKL4-17fVRNo-m5ai7s",
    authDomain: "sw-try-firestore.firebaseapp.com",
    databaseURL: "https://sw-try-firestore.firebaseio.com",
    projectId: "sw-try-firestore",
    storageBucket: "sw-try-firestore.appspot.com",
    messagingSenderId: "244809922621"
  }
};
