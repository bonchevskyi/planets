import { useState } from 'react';

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    const transitionDuration = 1000;
    const tabletBreakpoint = 768;

    /**
     * Function to open menu
     */
    const showMenu = () => {
        setIsOpen(true);
        setIsTransitionend(false);
        setIsExpanded(true);

        setTimeout(() => {
            setIsTransitionend(true);
        }, transitionDuration);
    };

    /**
     * Function to close menu
     */
    const closeMenu = () => {
        setIsTransitionend(false);
        setIsOpen(false);
        setIsExpanded(false);

        setTimeout(() => {
            setIsTransitionend(true);
        }, transitionDuration);
    };

    /**
     * Function to restore all states to it default values.
     */
    const restoreToDefault = (): void => {
        setIsOpen(false);
        setIsExpanded(false);
        setIsTransitionend(true);
    };

    /**
     * Function to toggle showMenu() and closeMenu() depending
     * on isOpen state. It doesn't run untill isTransitioned is true.
     */
    const handleToggle = () => {
        if (!isTransitionend) return false;
        if (!isOpen) {
            showMenu();
        } else {
            closeMenu();
        }
    };

    return [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] as const;
};

export default useToggleMenu;
