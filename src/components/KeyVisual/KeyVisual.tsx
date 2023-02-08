import { keyVisualVariants } from 'components/animations';
import planets from 'components/KeyVisual/data';
import { Container, Sun, AsteroidsBelt } from './KeyVisual.styled';
import PlanetSwitch from './PlanetSwitch';

interface Props {
    activePlanet: string,
}

function KeyVisual({ activePlanet }: Props) {
    return (
        <Container
          variants={keyVisualVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Sun />
            {planets.map((planet) => (
                <PlanetSwitch
                  data={planet}
                  key={planet.id}
                  activePlanet={activePlanet}
                />
            ))}
            <AsteroidsBelt />
        </Container>
    );
}

export default KeyVisual;
