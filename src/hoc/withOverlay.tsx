import { StyledOverlayDiv } from "@components/styled/Overlay";
import { PdfWrapperProps } from "@components/PdfWrapper/PdfWrapper.types";

export const withOverlay =
  (Component: React.ComponentType) => (props: PdfWrapperProps) => {
    return (
      <StyledOverlayDiv onClick={props.onClose}>
        <Component />
      </StyledOverlayDiv>
    );
  };
