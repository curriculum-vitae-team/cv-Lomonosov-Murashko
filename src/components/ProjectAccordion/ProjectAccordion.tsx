import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ProjectNameWrapper } from "./ProjectAccordion.styles";

export const ProjectAccordion = () => {
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary id="project" aria-controls="content">
        <ProjectNameWrapper>
          <Typography>Project name</Typography>
          <DeleteOutlineIcon />
        </ProjectNameWrapper>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>project info</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
