import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Details from './pages/Details';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'Map Weather'
            },
        },
        Details: {
            screen: Details,
            navigationOptions: {
                title: 'Detalhes do clima'
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#ff8742',   
            }
        }
    })
)

export default Routes;