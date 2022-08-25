import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  //background-color: ${(props) => props.theme.colors.black};

  overflow: hidden;

  //background-image: url('../../assets/images/planet-mars.svg') no-repeat;

  //background: url('../../assets/images/stars.svg') no-repeat;
  background-image: url('../../assets/images/gr.jpeg');
  background-size: cover;

  /* &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    background: white;
    border-radius: 100px;
  } */
`;
