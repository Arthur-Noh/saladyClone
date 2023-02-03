import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Main from '../pages/main';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        // <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Navigator>
            <Drawer.Screen
                key='main'
                name='main'
                component={Main}
            />
        </Drawer.Navigator>
    )
}

export default AppDrawer;