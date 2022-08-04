import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ProjectNameWrapper, StyledAccordion } from "./ProjectAccordion.styles";

export const ProjectAccordion = () => {
  return (
    <StyledAccordion>
      <AccordionSummary id="project" aria-controls="content">
        <ProjectNameWrapper>
          <Typography>Project name</Typography>
          <DeleteOutlineIcon />
        </ProjectNameWrapper>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>project info</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
