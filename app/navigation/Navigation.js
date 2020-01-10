import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Splash from '../component/screen/splash/splash';

const Nav = createSwitchNavigator({
  Splash: Splash,
});

const AppContainer = createAppContainer(Nav);
export default AppContainer;
