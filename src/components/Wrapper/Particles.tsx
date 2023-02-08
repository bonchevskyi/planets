/* eslint-disable react/prop-types */
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles
import type { Container, Engine } from 'tsparticles-engine';
import { useCallback, useMemo } from 'react';

function ParticlesComponent({ id }) {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: false,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#fff',
                },
                shape: {
                    type: 'star',
                },
                opacity: {
                    value: 0.8,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                rotate: {
                    value: 0,
                    random: true,
                    direction: 'clockwise',
                    animation: {
                        enable: false,
                        speed: 5,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: false,
                    distance: 600,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: 1,
                    random: false,
                    straight: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: false,
                        mode: ['grab'],
                    },
                    onclick: {
                        enable: false,
                        mode: 'bubble',
                    },
                    resize: true,
                },
            },
            retina_detect: true,
            background: {
                color: '#070722',
                image: '',
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
            },
            fpsLimit: 60,
        }),
        [],
    );

    const particlesInit = useCallback(async (engine: Engine) => {
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await container;
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={id} init={particlesInit} loaded={particlesLoaded} options={options} />;
}

export default ParticlesComponent;
