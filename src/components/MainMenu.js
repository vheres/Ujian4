import { createBottomTabNavigator } from 'react-navigation';
import Profile from './Profile';
import Home from './Home';

export default createBottomTabNavigator(
    {   
        Home: {
            screen: Home
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);