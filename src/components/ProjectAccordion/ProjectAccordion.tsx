import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@mui/material";
import { ProjectNameWrapper } from "./ProjectAccordion.styles";

export const ProjectAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary id="project" aria-controls="content">
        <ProjectNameWrapper>
          <Typography>{/* project here */}</Typography>
          <DeleteOutlineIcon />
        </ProjectNameWrapper>
      </AccordionSummary>
      <AccordionDetails>
        {/* <ProjectInfo projectId={} /> */}
      </AccordionDetails>
    </Accordion>
  );
};
