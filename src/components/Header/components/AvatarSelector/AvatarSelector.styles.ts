import styled from "@emotion/styled";
import { AccountCircle } from "@mui/icons-material";

export const StyledAccountCircleIcon = styled(AccountCircle)({
  width: "3em",
  height: "3em",
  cursor: "pointer",
});

export const Avatar = styled("div", {
  shouldForwardProp: (prop) => prop !== "backgroundUrl",
})(({ backgroundUrl }: { backgroundUrl: string }) => ({
  width: "3em",
  height: "3em",
  background: `url(${backgroundUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "100%",
  cursor: "pointer",
}));
