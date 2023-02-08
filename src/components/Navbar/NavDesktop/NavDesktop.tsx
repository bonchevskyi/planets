import planets from 'components/Navbar/data';
import {
    Nav, List, Item, Link,
} from './NavDesktop.styled';

interface Props {
    pathName: string,
    activePlanet: string,
    onHover: React.Dispatch<React.SetStateAction<string>> | ((path: string) => void),
}

function NavDesktop({ pathName, activePlanet, onHover }: Props) {
    return (
        <Nav>
            <List>
                {planets.map((planet) => (
                    <Item key={planet.id}>
                        <Link
                          to={planet.path}
                          $bgColor={planet.color}
                          $isActive={
                                planet.path === pathName
                                || planet.path === activePlanet
                            }
                          onMouseOver={() => onHover(planet.path)}
                          onMouseLeave={() => onHover('/')}
                          onFocus={() => onHover(planet.path)}
                          onBlur={() => onHover('/')}
                        >
                            {planet.name}
                        </Link>
                    </Item>
                ))}
            </List>
        </Nav>
    );
}

export default NavDesktop;
