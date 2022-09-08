import { Button } from "@mui/material";
import { withAdminAccess } from "@src/hoc/withAdminAccess";
import React from "react";

export const FormSaveButton = () => {
  return (
    <Button type="submit" value="Save" variant="contained">
      Save
    </Button>
  );
};

export const SaveButtonWithAdminAccess = withAdminAccess(FormSaveButton);
