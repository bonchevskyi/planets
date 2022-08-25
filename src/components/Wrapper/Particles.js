import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
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
          value: "#fff",
        },
        shape: {
          type: "star",
          options: {
            sides: 5,
          },
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
          direction: "clockwise",
          animation: {
            enable: false,
            speed: 5,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 600,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
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
            mode: ["grab"],
          },
          onclick: {
            enable: false,
            mode: "bubble",
          },
          resize: true,
        },
      },
      retina_detect: true,
      background: {
        color: "#070722",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
