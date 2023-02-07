import React from 'react';
import { useTheme } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackDef, AppStackParamList } from './routeDef';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    const theme = useTheme();

    return (
        <Stack.Navigator initialRouteName='Main'>
            { Object.entries({ ...AppStackDef }).map(([ name, { initialParams, component }]) => (
                <Stack.Screen
                    key={name}
                    // @ts-ignore
                    name={name}
                    component={component}
                    initialParams={initialParams}
                    options={{
                        headerStyle: {
                            backgroundColor: theme.colors.green[300],
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.colors.white.base,
                    }}
                />
            ))}
        </Stack.Navigator>
    )
}

export default AppStack;