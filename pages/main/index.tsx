import { observer } from 'mobx-react';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const Main = observer(() => {
    return (
        <Layout>
            <Text>메인 페이지</Text>
        </Layout>
    );
});

export default Main;