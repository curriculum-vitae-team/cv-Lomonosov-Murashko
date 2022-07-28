import { Stack, Typography } from "@mui/material";
import { Breadcrumb } from "../../components/Breadcrumb";

export const NotFoundPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" fontSize="2rem">
      <Typography variant="h3" component="h3">
        404: Not Found
      </Typography>
      <Breadcrumb />
    </Stack>
  );
};
