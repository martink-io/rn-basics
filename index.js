/** @format */

import {AppRegistry} from 'react-native';
import App from './App';

import Bananas from './Bananas';
import LotsOfGreetings from './LotsOfGreetings';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Touchables);
