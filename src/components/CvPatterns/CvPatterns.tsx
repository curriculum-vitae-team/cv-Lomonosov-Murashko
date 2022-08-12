import { useState } from "react";
import { withOverlay } from "@hoc/withOverlay";
import { StyledDiv, StyledPattern } from "./CvPatterns.styles";
import { PdfWrapperWithOverlay } from "@components/PdfWrapper/PdfWrapper";

const CvPatterns = () => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const onPatternsClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const showPdf = () => {
    setIsPdfVisible(true);
  };

  return (
    <>
      <StyledDiv onClick={onPatternsClick}>
        <StyledPattern onClick={showPdf}>type 1</StyledPattern>
        <StyledPattern onClick={showPdf}>type 2</StyledPattern>
      </StyledDiv>
      {isPdfVisible && <PdfWrapperWithOverlay />}
    </>
  );
};

export const CvPatternsWithOverlay = withOverlay(CvPatterns);
