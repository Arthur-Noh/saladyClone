import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { IHeaderButton } from '../../helper/headerHelper';
import { scaler } from '../../helper/scaler';
import BackArrow from '../../assets/navigator/backArrow.png';

const Button = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;

const ButtonImage = styled.Image`
width: ${scaler(20)}px;
height: ${scaler(20)}px;
`;

const ButtonText = styled.Text<{ disabled?: boolean }>`
font-size: ${({ theme }) => theme.typography.size.m1}px;
font-weight: ${({ theme }) => theme.typography.weight.medium};
color: ${({ theme, disabled }) => disabled ? theme.colors.gray[100] : theme.colors.white.base};
`;

interface IHeaderLeftButton {
    option: IHeaderButton;
}

const HeaderLeftButton: React.FC<IHeaderLeftButton> = (props) => {
    const navigation = useNavigation();

    const getButton = useCallback((button: IHeaderButton) => {
        if (button.type === 'text') {
            return (
                <ButtonText disabled={button.disabled}>{button.text}</ButtonText>
            );
        }
        else if (button.type === 'image') {
            return button.image && (
                <ButtonImage source={button.image} />
            );
        }
        // NOTE: Default BackArrow
        else {
            return (
                <ButtonImage source={BackArrow} />
            );
        }
    }, []);

    return (
        <Button onPress={ props.option.onPress ?? navigation.goBack }>
            {getButton(props.option)}
        </Button>
    );
};

export default HeaderLeftButton;