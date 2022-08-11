import { PdfDownloadLink } from "./components/PdfDownloadLink";
import { PdfViewer } from "./components/PdfViewer";
import { StyledOverlayDiv, StyledDiv } from "./PdfWrapper.styles";
import { PdfWrapperProps } from "./PdfWrapper.types";

export const PdfWrapper = ({ onClose }: PdfWrapperProps) => {
  return (
    <StyledOverlayDiv onClick={onClose}>
      <StyledDiv>
        <PdfViewer />
        {/* <PdfDownloadLink /> */}
      </StyledDiv>
    </StyledOverlayDiv>
  );
};
