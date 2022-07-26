import { Dispatch, SetStateAction } from "react";
import {
  StyledStack,
  StyledTypography,
  StyledButton,
  StyledBox,
} from "./UserProfileCard.styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type UserProfileCardProps = {
  onClose: () => void;
};

export const UserProfileCard = ({ onClose }: UserProfileCardProps) => {
  const handleSignOutClick = () => {
    // log out
  };

  return (
    <StyledBox onClick={onClose}>
      <StyledStack
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <AccountCircleIcon sx={{ width: "3em", height: "3em" }} />
        <StyledTypography>Murashko Ilya</StyledTypography>
        <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
      </StyledStack>
    </StyledBox>
  );
};
