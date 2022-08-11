import { PdfDownloadLink } from "./components/PdfDownloadLink";
import { PdfViewer } from "./components/PdfViewer";
import { StyledDiv } from "./PdfWrapper.styles";
import { PDFViewer } from "@react-pdf/renderer";
import { withOverlay } from "@hoc/withOverlay";

function PdfWrapper() {
  return (
    <StyledDiv>
      <PDFViewer>
        <PdfViewer />
      </PDFViewer>
      <PdfDownloadLink />
    </StyledDiv>
  );
}

export const PdfWrapperWithOverlay = withOverlay(PdfWrapper);
