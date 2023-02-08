import { illustrationVariants } from 'components/animations';
import { DataIT, PlanetIT } from 'types';
import { Illustration, Image } from './Illustration.styled';

interface Props {
    planetData: PlanetIT,
    currentData: DataIT,
    isChanging: boolean
}

function IllustrationContainer({ planetData, currentData, isChanging }: Props) {
    return (
        <Illustration
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Image
              image={currentData.image}
              geo={currentData.geo ? currentData.geo : false}
              desktopImgWidth={planetData.desktopImgWidth}
              tabletImgWidth={planetData.tabletImgWidth}
              mobileImgWidth={planetData.mobileImgWidth}
              isChanging={!!isChanging}
            />
        </Illustration>
    );
}

export default IllustrationContainer;
