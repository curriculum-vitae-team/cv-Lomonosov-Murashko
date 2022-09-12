import React, { useRef, useState } from "react";
import { withOverlay } from "@hoc/withOverlay";
import { StyledDiv, StyledPattern, Img } from "./CvPatterns.styles";
import { PdfWrapperWithOverlay } from "@components/PdfWrapper/PdfWrapper";
import pattern1 from "@assets/images/pattern1.png";
import pattern2 from "@assets/images/pattern2.png";
import { PDFVariants } from "@constants/pdfVariants";

const CvPatterns = () => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [choosenPattern, setChoosenPattern] = useState("");
  const patternRef = useRef<HTMLDivElement>(null);
  const onPatternsClick = (e: React.MouseEvent<HTMLElement>) => {
    patternRef?.current?.classList.add("hidden");
    e.stopPropagation();
  };

  // dont like it
  const showPdf = (e: React.SyntheticEvent) => {
    if (e.currentTarget.classList.value.includes("variant-1")) {
      setChoosenPattern(PDFVariants.VARIANT_1);
    } else {
      setChoosenPattern(PDFVariants.VARIANT_2);
    }
    setIsPdfVisible(true);
  };

  return (
    <>
      <StyledDiv ref={patternRef} onClick={onPatternsClick}>
        <StyledPattern className="variant-1" onClick={showPdf}>
          <Img src={pattern1} alt="variant-1" />
        </StyledPattern>
        <StyledPattern className="variant-2" onClick={showPdf}>
          <Img src={pattern2} alt="variant-2" />
        </StyledPattern>
      </StyledDiv>
      {isPdfVisible && <PdfWrapperWithOverlay variant={choosenPattern} />}
    </>
  );
};

export const CvPatternsWithOverlay = withOverlay(CvPatterns);
