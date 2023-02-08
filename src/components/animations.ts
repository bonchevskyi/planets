import { Variants } from 'framer-motion';

export const navbarVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 4 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 1 },
    },
};

export const keyVisualVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 6,
        rotate: '-40deg',
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { delay: 1, duration: 3 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        rotate: '-10deg',
        transition: { duration: 1 },
    },
};

export const illustrationVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        rotate: '20deg',
        x: 200,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        x: 0,
        transition: { delay: 1, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        rotate: '-20deg',
        x: -200,
        transition: { duration: 1 },
    },
};

export const infoVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        y: 25,
        transition: { duration: 1 },
    },
};

export const introVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 1 },
    },
};

export const tabsVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 1 },
    },
};
