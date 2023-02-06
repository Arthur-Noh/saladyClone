import { observer } from 'mobx-react';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const NaverLogin = observer(() => {
    return (
        <Layout>
            <Text>네이버 로그인 페이지</Text>
        </Layout>
    );
});

export default NaverLogin;