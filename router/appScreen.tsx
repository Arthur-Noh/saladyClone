import React from 'react';
import { observer } from 'mobx-react';
import { SafeAreaView } from 'react-native';
import AppStack from './appStack';

const AppScreen = observer(() => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <AppStack />
        </SafeAreaView>
    );
});

export default AppScreen;