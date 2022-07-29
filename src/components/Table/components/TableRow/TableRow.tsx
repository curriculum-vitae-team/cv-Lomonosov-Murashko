import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TableRowProps } from "./TableRow.types";

export function TableRow<T extends { id: string }>({
  item,
  redirectButtonText,
  deleteButtonText,
  onDelete,
}: TableRowProps<T>) {
  const itemKeys = Object.keys(item) as (keyof T)[];

  const accordionButtonXS = 0;
  const gridXS = (12 - accordionButtonXS) / (itemKeys.length - 1);

  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary
        id="header"
        aria-controls="content"
        expandIcon={<ExpandMore />}
      >
        <Grid container>
          {itemKeys
            .filter((key) => key !== "id")
            .map((key) => (
              <Grid item xs={gridXS} key={item.id + "-" + (key as string)}>
                <Typography>{item[key] as unknown as ReactNode}</Typography>
              </Grid>
            ))}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Button>
          <Link to={item.id}>{redirectButtonText}</Link>
        </Button>
        <Button onClick={() => onDelete(item.id)}>{deleteButtonText}</Button>
      </AccordionDetails>
    </Accordion>
  );
}
