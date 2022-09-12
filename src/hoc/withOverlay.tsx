import { StyledOverlayDiv } from "@components/styled/Overlay";
import { PdfWrapperProps } from "@components/PdfWrapper/PdfWrapper.types";
import { FC } from "react";

export const withOverlay =
  (Component: FC<PdfWrapperProps>) => (props: PdfWrapperProps) => {
    return (
      <StyledOverlayDiv onClick={props.onClose}>
        <Component {...props} />
      </StyledOverlayDiv>
    );
  };
