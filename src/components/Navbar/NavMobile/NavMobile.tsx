import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import {
    Nav, Menu, Bars, List,
} from './NavMobile.styled';
import Items from './ItemControler';
import useToggleMenu from '../useToggleMenu';

interface Props {
    windowWidth: number,
}

function NavMobile({ windowWidth }: Props) {
    const [handleToggle, restoreToDefault, isOpen, isExpanded, tabletBreakpoint] = useToggleMenu();

    useEffect(() => {
        if (windowWidth >= tabletBreakpoint) {
            restoreToDefault();
        }
    }, [windowWidth]);

    return (
        <Nav>
            <Menu
              aria-label="Menu toggle"
              aria-expanded={isExpanded}
              aria-controls="nav-list"
              onClick={handleToggle}
            >
                <Bars isOpen={isOpen} />
            </Menu>
            <AnimatePresence>
                {isOpen && (
                    <List
                      id="nav-list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: 'linear', duration: 0.3 }}
                      exit={{ opacity: 0 }}
                    >
                        <Items restoreToDefault={restoreToDefault} />
                    </List>
        )}
            </AnimatePresence>
        </Nav>
    );
}

export default NavMobile;
