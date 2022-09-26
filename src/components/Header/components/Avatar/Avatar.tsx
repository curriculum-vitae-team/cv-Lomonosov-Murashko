import { AccountCircle } from "@mui/icons-material";
import { AvatarImg } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({ url }: AvatarProps) => {
  if (url) {
    return <AvatarImg src={url} />;
  }

  return <AccountCircle />;
};
