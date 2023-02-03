export interface IGray {
    100: string;
    200: string;
    300: string;
    400: string;
}

export interface IWhite {
    base: string;
}

export interface IBlack {
    base: string;
}

export interface IGreen {
    100: string;
    200: string;
    300: string;
}

export interface IPrimary {
    red: string;
    yellow: string;
}

export const gray: IGray = {
    100: '#DCDCDC',
    200: '#CCCCCC',
    300: '#666666',
    400: '#222222',
};

export const white: IWhite = {
    base: '#ffffff',
};

export const black: IBlack = {
    base: '#181818',
};

export const green: IGreen = {
    100: '#678F74',
    200 :'#437250',
    300 :'#306342',
};

export const primary: IPrimary = {
    red: '#E47f47',
    yellow: '#EC4E3E',
};