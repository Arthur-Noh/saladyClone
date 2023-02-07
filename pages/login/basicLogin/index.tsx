import React from 'react';
import { observer } from 'mobx-react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import useCustomHeader from '../../../hook/useCustomHeader';

const Layout = styled.View`
flex: 1;
`;

const BasicLogin = observer(() => {
    useCustomHeader({
        title: '기본 로그인 페이지',
        headerLeftButton: {
            type: 'default',
        },
    });

    return (
        <Layout>
            <Text>기본 로그인 페이지</Text>
        </Layout>
    );
});

export default BasicLogin;
