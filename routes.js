import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

import Contacts from './screens/Contacts'
import Favorites from './screens/Favorites'
import User from './screens/User'
import Profile from './screens/Profile'
import Options from './screens/Options'

import colors from './utils/colors'

const getTabBarIcon = icon => ({ tintColor }) => (
    <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
)

const ContactsScreens = createStackNavigator(
    {
      Contacts: {
        screen: Contacts,
      },
      Profile: {
        screen: Profile,
      },
    },
    {
      initialRouteName: 'Contacts',
    },
)

const FavoritesScreens = createStackNavigator(
    {
      Favorites: {
        screen: Favorites,
      },
      Profile: {
        screen: Profile,
      },
    },
    {
      initialRouteName: 'Favorites',
    },
)
  
const UserScreens = createStackNavigator(
    {
        User: {
            screen: User,
        },
        Options: {
            screen: Options
        }
    },
    {
        mode: 'modal',
        initialRouteName: 'User',
    },
)

export default createBottomTabNavigator({
    Contacts: {
        screen: ContactsScreens,
        navigationOptions: {
            tabBarIcon: getTabBarIcon('list'),
        },
    },
    Favorites: {
        screen: FavoritesScreens,
        navigationOptions: {
            tabBarIcon: getTabBarIcon('star'),
        },
    },
    User: {
        screen: UserScreens,
        navigationOptions: {
            tabBarIcon: getTabBarIcon('person'),
        },
    }
},
{
    initialRouteName: 'Contacts',
    tabBarOptions: {
        style: {
            backgroundColor: colors.greyLight,
        },
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.greyDark,
        renderIndicator: () => null,
    },
})