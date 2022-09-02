import { useState } from "react";
import { withOverlay } from "@hoc/withOverlay";
import { StyledDiv, StyledPattern, Img } from "./CvPatterns.styles";
import { PdfWrapperWithOverlay } from "@components/PdfWrapper/PdfWrapper";
import pattern1 from "@assets/images/pattern1.png";

const CvPatterns = () => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [choosenPattern, setChoosenPattern] = useState(0);
  const onPatternsClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  // dont like it 
  const showPdf = (e: React.SyntheticEvent) => {
    if (e.currentTarget.classList.value.includes("variant-1")) {
      setChoosenPattern(1);
    } else {
      setChoosenPattern(2);
    }
    setIsPdfVisible(true);
  };

  return (
    <>
      <StyledDiv onClick={onPatternsClick}>
        <StyledPattern className="variant-1" onClick={showPdf}>
          <Img src={pattern1} alt="variant-1" />
        </StyledPattern>
        <StyledPattern className="variant-2" onClick={showPdf}>
          {/* TODO: replace pattern1 with another one */}
          <Img src={pattern1} alt="variant-2" />
        </StyledPattern>
      </StyledDiv>
      {isPdfVisible && <PdfWrapperWithOverlay variant={choosenPattern} />}
    </>
  );
};

export const CvPatternsWithOverlay = withOverlay(CvPatterns);
