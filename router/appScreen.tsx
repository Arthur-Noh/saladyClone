import { observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView } from 'react-native';
import AppDrawer from './appDrawer';

const AppScreen = observer(() => {
    return (
        <AppDrawer /> 
    );
});

export default AppScreen;

// TODO: Stack 에다가 넣어야한다.
// 근데 Nested Drawer 로 구현할까? 그냥 모달로 구현하면 안될까? 충분히 가능할 것 같은데
{/* <SafeAreaView style={{ flex: 1 }}> */}