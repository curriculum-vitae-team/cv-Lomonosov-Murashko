import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./PdfViewer.styles";
import { PdfViewerProps } from "./PdfViewer.types";
import innoLogo from "@assets/images/innoLogo.png";
import redLine from "@assets/images/redLine.png";

export const PdfViewer = ({ data, variant }: PdfViewerProps) => {
  const { name, user, projects, languages, skills } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionLeft}>
          <>
            <Image style={styles.logo} src={innoLogo}></Image>
            <Text style={styles.subtitle}>Personal Info</Text>
            <Text style={styles.text}>{user?.email || "<Email here>"}</Text>
            <Image style={styles.sideRedLine} src={redLine}></Image>
            <Text style={styles.subtitle}>Skills</Text>
            {user?.profile?.skills.map((skill) => (
              <Text style={styles.text}>
                {skill.skill_name || "Skill name"} -
                {skill.mastery || "Skill mastery"}
              </Text>
            )) ||
              skills.map((skill) => (
                <Text style={styles.text}>
                  {skill.skill_name || "Skill name"} -
                  {skill.mastery || "Skill mastery"}
                </Text>
              ))}
            <Image style={styles.sideRedLine} src={redLine}></Image>
            <Text style={styles.subtitle}>Languages</Text>
            {user?.profile?.languages.map((language) => (
              <Text style={styles.text}>
                {language.language_name || "Language name"} -
                {language.proficiency || "Proficiency"}
              </Text>
            )) ||
              languages.map((language) => (
                <Text style={styles.text}>
                  {language.language_name || "Language name"} -
                  {language.proficiency || "Proficiency"}
                </Text>
              ))}
            <Image style={styles.sideRedLine} src={redLine}></Image>
          </>
        </View>
        <View style={styles.sectionRight}>
          <Text style={styles.headerText}>
            {user?.profile?.full_name || "<Full name here>"}
          </Text>
          <Image style={styles.redLine} src={redLine}></Image>
          <Text>Experience</Text>
          {projects.map((project) => (
            <>
              <Text style={styles.subtitle}>{project.name}</Text>
              <Text style={styles.date}>
                {project.start_date} - {project.end_date}
              </Text>
              <Text style={styles.text}>{project.description}</Text>
            </>
          ))}
        </View>
      </Page>
    </Document>
  );
};
