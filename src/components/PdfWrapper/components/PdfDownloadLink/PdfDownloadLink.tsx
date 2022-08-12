import { BlobProvider } from "@react-pdf/renderer";
import { PdfViewer } from "../PdfViewer";

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
              <a href={downloadURL} download="CV.pdf">
                Download
              </a>
            )
          );
        }}
      </BlobProvider>
    </div>
  );
};
