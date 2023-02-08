import Icon from 'components/Icon';
import planets from 'components/Navbar/data';
import { Item, Link } from './NavMobile.styled';

interface Props {
    restoreToDefault: () => void,
}

function ItemsMobile({ restoreToDefault }: Props): JSX.Element {
    return (
        <>
            {planets.map((planet) => (
                <Item
                  key={planet.id}
                  initial={{ x: '100vw' }}
                  animate={{ x: '0vw' }}
                  transition={{
            ease: [0.06, 0.9, 1, 0.98],
            duration: 0.7,
            delay: planet.id * 5 + 0.5 / 100,
          }}
                >
                    <Link
                      to={planet.path}
                      color={planet.color}
                      onClick={() => restoreToDefault()}
                    >
                        {planet.name}
                        <Icon
                          name="icon-chevron1"
                          size={20}
                          color="hsl(240, 6%, 54%)"
                          customStyles={{ marginTop: '5px' }}
                        />
                    </Link>
                </Item>
            ))}
        </>
    );
}

export default ItemsMobile;
