import { MenuItem } from "@mui/material";
import { withOverlay } from "@src/hoc/withOverlay";
import { languageStore } from "@src/stores/LanguageStore/LanguageStore";
import { AppLanguage } from "@src/stores/LanguageStore/LanguageStore.types";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { languages } from "./LanguageSelect.data";
import { StyledMenu, StyledTranslateIcon } from "./LanguageSelect.styles";

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledTranslateIcon onClick={handleOpen} />
      {isOpen && <LanguageSelector open={isOpen} onClose={handleClose} />}
    </>
  );
};

const LanguageSelector = withOverlay(
  observer(({ open }: { open: boolean }) => {
    const { setLanguage } = languageStore;

    const handleLanguageChange = (lang: AppLanguage) => {
      return function () {
        setLanguage(lang);
      };
    };

    return (
      <StyledMenu open={open}>
        {languages.map((lang) => (
          <MenuItem
            disabled={lang === languageStore.language$}
            sx={{ width: "100%" }}
            onClick={handleLanguageChange(lang)}
            key={lang}
          >
            {lang}
          </MenuItem>
        ))}
      </StyledMenu>
    );
  }),
);
