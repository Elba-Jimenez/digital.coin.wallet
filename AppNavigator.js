// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen'; // You will create this next

const AppNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppNavigator);
