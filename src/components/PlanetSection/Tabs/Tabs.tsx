import { tabsVariants } from 'components/animations';
import { PlanetIT } from 'types';
import { Tabs, Tab } from './Tabs.styled';

interface Props {
    planetData: PlanetIT,
    handleClick(): void,
    currentTab: string,
    windowWidth: number,
}

function TabsContainer({
    planetData,
    handleClick,
    currentTab,
    windowWidth,
}: Props) {
    return (
        <Tabs
          variants={tabsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Tab
              data-type="overview"
              planetData={planetData}
              onClick={handleClick}
              $isActive={currentTab === 'overview'}
            >
                Overview
            </Tab>
            <Tab
              data-type="structure"
              planetData={planetData}
              onClick={handleClick}
              $isActive={currentTab === 'structure'}
            >
                {windowWidth >= 768 ? 'Internal ' : ''}
                Structure
            </Tab>
            <Tab
              data-type="geology"
              planetData={planetData}
              onClick={handleClick}
              $isActive={currentTab === 'geology'}
            >
                Surface
                {windowWidth >= 768 ? ' Geology' : ''}
            </Tab>
        </Tabs>
    );
}

export default TabsContainer;
