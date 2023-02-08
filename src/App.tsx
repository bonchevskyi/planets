import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Provider from 'components/Provider/Provider';
import Wrapper from 'components/Wrapper/Wrapper';
import Navbar from 'components/Navbar/Navbar';
import KeyVisual from 'components/KeyVisual/KeyVisual';
import Particles from 'components/Wrapper/Particles';
import {
    Earth,
    Mercury,
    Venus,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
} from 'pages';

function App() {
    const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/');

    return (
        <Provider>
            <Wrapper>
                <Particles id="tsparticles" />
                <Navbar
                  pathName={location.pathname}
                  onHover={setActivePlanet}
                  activePlanet={activePlanet}
                />
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route path="/" element={<KeyVisual activePlanet={activePlanet} />} />
                        <Route path="mercury" element={<Mercury />} />
                        <Route path="venus" element={<Venus />} />
                        <Route path="earth" element={<Earth />} />
                        <Route path="mars" element={<Mars />} />
                        <Route path="jupiter" element={<Jupiter />} />
                        <Route path="saturn" element={<Saturn />} />
                        <Route path="uranus" element={<Uranus />} />
                        <Route path="neptune" element={<Neptune />} />
                    </Routes>
                </AnimatePresence>
            </Wrapper>
        </Provider>
    );
}

export default App;
