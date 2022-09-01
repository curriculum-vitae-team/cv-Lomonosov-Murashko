import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./PdfViewer.styles";
import { PdfViewerProps } from "./PdfViewer.types";

export const PdfViewer = ({ data }: PdfViewerProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
