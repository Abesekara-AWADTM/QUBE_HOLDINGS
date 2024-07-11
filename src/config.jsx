import AppGlobalConfigs from '../public/AppGlobalConfig';
// const TEST_URL = "https://testtsapp.egansgroup.com.au/api/"; //Test API
// const LIVE_URL = "https://tsapp.egansgroup.com.au/api/"; //LIVE API

// const ENV = 1; // 0 = dev, 1 = test, 2 = live
const VERSION = "1.0.0";
// const API_URL = window.AppGlobalConfigs.GL_API_URL;
 const API_URL = AppGlobalConfigs.GL_API_URL;
// if (ENV < 2) {
//   API_URL = TEST_URL
// } else {
//   API_URL = LIVE_URL
// }




export { API_URL,VERSION};
