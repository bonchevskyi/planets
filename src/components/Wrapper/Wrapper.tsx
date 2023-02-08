import Container from './Wrapper.styled';

interface Props {
    children: React.ReactNode,
}

function Wrapper({ children }: Props) {
    return (
        <Container>{children}</Container>
    );
}

export default Wrapper;
