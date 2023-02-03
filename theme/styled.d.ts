import 'styled-components';
import { IWhite, IGray, IBlack, IRed, IPrimary, IGreen } from './palette';
import { ITypography } from './typography';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            gray: IGray,
            black: IBlack,
            green: IGreen,
            primary: IPrimary,
        };
        base: {
            templatePadding: number,
            smallComponentPadding: number,
            mediumComponentPadding: number,
            largeComponentPadding: number,
            smallRadius: number,
            mediumRadius: number,
            largeRadius: number,
        };
        typography: ITypography;
    }
}