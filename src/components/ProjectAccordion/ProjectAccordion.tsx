import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@mui/material";
import { ProjectNameWrapper } from "./ProjectAccordion.styles";
import { projectsMock } from "@mock/projects";
import { ProjectInfo } from "@components/ProjectInfo";

export const ProjectAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary id="project" aria-controls="content">
        <ProjectNameWrapper>
          <Typography>{projectsMock[0].name}</Typography>
          <DeleteOutlineIcon />
        </ProjectNameWrapper>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ProjectInfo projectId={projectsMock[0].id} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
