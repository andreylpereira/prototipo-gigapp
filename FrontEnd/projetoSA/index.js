/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './src/App';
import {name as appName} from './app.json';
import Home from './src/components/Home';
import Routes from './src/routes/Routes';

AppRegistry.registerComponent(appName, () => Routes);
