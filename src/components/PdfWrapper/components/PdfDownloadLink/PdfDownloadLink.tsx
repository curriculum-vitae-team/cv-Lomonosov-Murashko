import { BlobProvider } from "@react-pdf/renderer";
import { PdfViewer } from "../PdfViewer";
import { StyledLink } from "./PdfDownloadLink.styles"; 

export const PdfDownloadLink = () => {
  return (
    <div>
      <BlobProvider document={<PdfViewer />}>
        {({ blob }) => {
          const downloadURL = URL.createObjectURL(
            new Blob([blob || ""], { type: "text/plain" }),
          );
          return (
            blob && (
              <StyledLink href={downloadURL} download="CV.pdf">
                Download
              </StyledLink>
            )
          );
        }}
      </BlobProvider>
    </div>
  );
};
