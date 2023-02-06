import BasicLogin from '../pages/login/basicLogin';
import NaverLogin from '../pages/login/naverLogin';
import Main from '../pages/main';

// 메인 페이지
const MainScreens = {
    Main: {
        initialParams: {},
        component: Main,
    },
};

// 로그인 페이지
const LoginScreens = {
    BasicLogin: {
        initialParams: {},
        component: BasicLogin,
    },
    NaverLogin: {
        initialParams: {},
        component: NaverLogin,
    },
};

type DefaultParams = {
    defaultParam?: string,
} | undefined;


export type AppStackParamList = {
    Main: DefaultParams,
    
    BasicLogin: DefaultParams,
    NaverLogin: DefaultParams,
};

export const AppStackDef = {
    ...MainScreens,
    ...LoginScreens,
};