import { usePDF } from "@react-pdf/renderer";
import { PdfViewer } from "../PdfViewer/PdfViewer";

export const PdfDownloadLink = () => {
  const [instance] = usePDF({ document: <PdfViewer /> });

  return (
    <a href={instance.url || ""} download="CV.pdf">
      Download
    </a>
  );
};
