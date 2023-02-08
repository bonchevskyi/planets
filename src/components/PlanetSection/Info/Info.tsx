import { infoVariants } from 'components/animations';
import { PlanetIT } from 'types';
import {
    Info, Item, Heading, Desc,
} from './Info.styled';

interface Props {
    planetData: PlanetIT,
}

function InfoContainer({ planetData }: Props) {
    return (
        <Info
          variants={infoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Item>
                <Heading>Rotation Time</Heading>
                <Desc>{planetData.rotation}</Desc>
            </Item>
            <Item>
                <Heading>Revolution Time</Heading>
                <Desc>{planetData.revolution}</Desc>
            </Item>
            <Item>
                <Heading>Radius</Heading>
                <Desc>{planetData.radius}</Desc>
            </Item>
            <Item>
                <Heading>Average temp.</Heading>
                <Desc>{planetData.temperature}</Desc>
            </Item>
        </Info>
    );
}

export default InfoContainer;
