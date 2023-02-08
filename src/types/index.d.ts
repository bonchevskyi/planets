declare module '*.mp3';

export interface StyleProps {
    isOpen?: (() => void) | number | boolean,
    onClick?: (() => void) | number | boolean,

    image?: string,
    geo?: string | boolean,
    desktopImgWidth?: string,
    tabletImgWidth?: string,
    mobileImgWidth?: string,
    $planetColor?: string,
    $bgColor?: string,
    isChanging?: boolean,
    $isActive?: boolean,
    planetData?: PlanetIT,
}

export interface DataIT {
    content: string,
    source: string,
    image: string,
    geo?: string,
}

export interface PlanetIT {
    name?: string,
    overview?: DataIT,
    structure?: DataIT,
    geology?: DataIT,
    sectionColor?: string,
    desktopImgWidth?: string,
    tabletImgWidth?: string,
    mobileImgWidth?: string,
    rotation?: string,
    revolution?: string,
    radius?: string,
    temperature?: string,
}
