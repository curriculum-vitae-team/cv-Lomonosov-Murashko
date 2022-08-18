import { StyledLoader, StyledLoaderWrapper } from "./Loader.styles";

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader />
    </StyledLoaderWrapper>
  );
};

export const LoaderComponent = () => {
  return <StyledLoader />;
};
