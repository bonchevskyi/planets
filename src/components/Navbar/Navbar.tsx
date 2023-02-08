import { useEffect, useState } from 'react';
import { navbarVariants } from 'components/animations';
import {
    Header, Logo, LogoLink, Container,
} from './Navbar.styled';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';

interface Props {
    pathName: string,
    activePlanet: string,
    onHover: React.Dispatch<React.SetStateAction<string>> | ((path: string) => void),
}

function Navbar({ pathName, activePlanet, onHover }: Props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }, [windowWidth]);

    return (
        <Header
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Container>
                <Logo>
                    <LogoLink to="/">The Planets</LogoLink>
                </Logo>
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop
                      pathName={pathName}
                      onHover={onHover}
                      activePlanet={activePlanet}
                    />
                ) : (
                    <NavMobile windowWidth={windowWidth} />
                )}
            </Container>
        </Header>
    );
}

export default Navbar;
