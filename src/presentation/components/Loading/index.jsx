import LoadingSpinner, { Container } from "./styles";

const Loading = ({ fullHeight, type }) => {
  return (
    <Container fullHeight={fullHeight} type={type}>
      <LoadingSpinner />
    </Container>
  );
};

export default Loading;
