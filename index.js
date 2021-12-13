/**
 * @format
 */

 import { AppRegistry, UIManager } from 'react-native';
 import App from './src/index';
 import { name as appName } from './app.json';
 import './global';
 
 UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
 
 AppRegistry.registerComponent(appName, () => App);
 