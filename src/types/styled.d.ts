import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string,
            whiteAlpha50: string,
            whiteAlpha75: string,
            black: string,
            grayDark: string,
            grayLight: string,
            turquoise: string,
            orangeLight: string,
            orangeDark: string,
            purple: string,
            redLight: string,
            redDark: string,
            green: string,
            blue: string,
        },

        fonts: {
            primary: string,
            secondary: string,
        },

        planetData?: {
            sectionColor?: string,
        },
    }
}
