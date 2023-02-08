import { DataIT, PlanetIT } from 'types';
import { introVariants } from 'components/animations';
import {
    Intro, Title, Text, SourceContainer, Span, Link,
} from './Intro.styled';
import Icon from '../../Icon';

interface Props {
    planetData: PlanetIT,
    currentData: DataIT,
    isChanging: boolean
}

function IntroContainer({ planetData, currentData, isChanging }: Props) {
    return (
        <Intro
          variants={introVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Title>{planetData.name}</Title>
            <Text aria-live="assertive" isChanging={isChanging}>
                {currentData.content}
            </Text>
            <SourceContainer>
                <Span>Source: </Span>
                <Link href={currentData.source} planetData={planetData}>
                    Wikipedia
                    <Icon name="source" size={12} color="hsl(240, 6%, 54%)" />
                </Link>
            </SourceContainer>
        </Intro>
    );
}

export default IntroContainer;
