import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import AppScreen from './router/appScreen';

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const App = observer(() => {
    useEffect(() => {
        StatusBar.setBarStyle(Platform.OS === 'ios' ? 'dark-content': 'default');
    }, []);

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
                <ThemeProvider theme={theme}>
                    <AppScreen />
                </ThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
});

export default App;