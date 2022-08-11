import { StyledOverlayDiv } from "@components/styled/Overlay";
import { PdfWrapperProps } from "@components/PdfWrapper/PdfWrapper.types";

export const withOverlay = (Component: React.ComponentType) =>
  ({ onClose }: PdfWrapperProps) => {
    return (
      <StyledOverlayDiv onClick={onClose}>
        <Component />
      </StyledOverlayDiv>
    );
  };
