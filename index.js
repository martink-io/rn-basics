/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import Blink from './Blink';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Blink);
