import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResShowScreen from './src/screens/ResShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResShow: ResShowScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'FOOD OF THE DAY'
  }
}
);

export default createAppContainer(navigator);
