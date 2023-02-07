import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';
import React from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import useCustomHeader from '../../hook/useCustomHeader';
import { AppStackParamList } from '../../router/routeDef';
import Draw from '../../assets/navigator/draw.png';

const Layout = styled.View`
flex: 1;
`;

const Main = observer(() => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'Main'>>();

    useCustomHeader({
        title: 'Salady Main',
        // hide: true,
        headerRightButtons: [
            {
                type: 'text',
                text: '오른쪽',
                onPress: () => console.log('오른쪽 눌림'),
                // disabled: true,
            },
        ],
        // headerLeftButton: {
        //     type: 'text',
        //     text: '왼쪽',
        //     onPress: () => console.log('왼쪽눌림'),
        // },
        headerLeftButton: {
            type: 'image',
            image: Draw,
            onPress: () => console.log('왼쪽눌림'),
        },
    });

    return (
        <Layout>
            <Text>메인 페이지</Text>

            <Pressable onPress={() => navigation.navigate('BasicLogin')}>
                <Text>다음화면</Text>
            </Pressable>
        </Layout>
    );
});

export default Main;