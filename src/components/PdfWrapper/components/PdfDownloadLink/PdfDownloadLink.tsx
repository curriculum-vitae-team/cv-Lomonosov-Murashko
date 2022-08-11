import { BlobProvider } from "@react-pdf/renderer";
import { PdfViewer } from "../PdfViewer";

export const PdfDownloadLink = () => {
  return (
    <div>
      <BlobProvider document={<PdfViewer />}>
        {({ url }) => {
          return url && <a href={url} download="CV.pdf">Download</a>;
        }}
      </BlobProvider>
    </div>
  );
};
