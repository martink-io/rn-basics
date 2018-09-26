/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FixedDimensionsBasics);
