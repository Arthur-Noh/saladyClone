import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { IHeaderButton } from '../../helper/headerHelper';
import { scaler } from '../../helper/scaler';

const Layout = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Button = styled.TouchableOpacity<{ isFirst: boolean }>`
margin-left: ${({ isFirst }) => isFirst ? 0 : scaler(8)}px;
`;

const ButtonText = styled.Text<{ disabled?: boolean }>`
font-size: ${({ theme }) => theme.typography.size.m1}px;
font-weight: ${({ theme }) => theme.typography.weight.medium};
color: ${({ theme, disabled }) => disabled ? theme.colors.gray[100] : theme.colors.white.base};
`;

const ButtonImage = styled.Image`
width: 25px;
height: 25px;
`;

interface IHeaderRightButton {
    buttons?: Array<IHeaderButton>;
}

const HeaderRightButton: React.FC<IHeaderRightButton> = (props) => {
    const getButton = useCallback((button: IHeaderButton) => {
        switch (button.type) {
            case 'text':
                return (
                    <ButtonText disabled={button.disabled}>{button.text}</ButtonText>
                );
            case 'image' :
                return button.image && (
                    <ButtonImage source={button.image}/>
                );
            default:
                return (
                    <ButtonText disabled={button.disabled}>{button.text}</ButtonText>
                );
        }
    }, []);

    return (
        <Layout>
            { props.buttons?.map((button, index) => (
                <Button
                    key={index}
                    isFirst={index === 0}
                    onPress={button.onPress}
                >
                    {getButton(button)}
                </Button>
            ))}
        </Layout>
    );
};

export default HeaderRightButton;