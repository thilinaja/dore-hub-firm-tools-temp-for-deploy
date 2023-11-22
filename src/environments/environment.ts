// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId:'3b1b2e3d-9d26-4a3f-85b6-796bbf494266',
  redirectUrl:'https://orange-bay-0a74c8f03.4.azurestaticapps.net/login-ad',
  authority: `https://login.microsoftonline.com/917fada6-b828-4cde-88c7-311dc1700c86`,

  api: 'https://dore-hub-api-function-app.azurewebsites.net/api',
  apiCode: 'r1-M-az0ucvnuuIGEGuvGk5d0HgfRxCsWJPMhwehjJvkAzFuS588yQ==',
  siu: '578976e9-6079-422a-af90-ff754d970d7c',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
