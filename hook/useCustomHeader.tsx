import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import HeaderLeftButton from '../components/atoms/headerLeftButton';
import HeaderRightButton from '../components/atoms/headerRightButton';
import { IHeaderButton } from '../helper/headerHelper';

interface ICustomHeaderOption {
    title?: string;
    hide?: boolean;
    headerLeftButton?: IHeaderButton;
    headerRightButtons?: Array<IHeaderButton>;
}

const useCustomHeader = (customHeaderOption: ICustomHeaderOption) => {
    const {
        title = '',
        hide = false,
        headerLeftButton = { type: undefined, image: undefined, disabled: false, onPress: () => {} },
        headerRightButtons = [],
    } = customHeaderOption;

    const navigation = useNavigation();

    useLayoutEffect(() => {
        let options: Partial<{}> = {
            headerTitle: title,
            headerShown: !hide,
            headerBackTitle: '',
            headerRight: () => (
                <HeaderRightButton buttons={headerRightButtons} />
            ),
        };

        if (headerLeftButton.type) {
            options = {
                ...options,
                headerLeft: () => (
                    <HeaderLeftButton
                        option={{
                            type: headerLeftButton.type,
                            text: headerLeftButton.text,
                            image: headerLeftButton.image,
                            disabled: headerLeftButton.disabled,
                            onPress: headerLeftButton.onPress,
                        }}
                    />
                ),
            };
        }

        navigation.setOptions(options);

        return () => {
            navigation.setOptions({
                HeaderRightButton: () => (
                    <HeaderRightButton buttons={[]} />
                ),
            });
        };
    }, [ navigation, title, hide, headerLeftButton, headerRightButtons ]);
};

export default useCustomHeader;