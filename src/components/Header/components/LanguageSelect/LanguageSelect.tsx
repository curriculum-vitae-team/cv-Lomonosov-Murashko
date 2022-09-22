import { Button, Typography } from "@mui/material";
import { withOverlay } from "@src/hoc/withOverlay";
import { languageStore } from "@src/stores/LanguageStore/LanguageStore";
import { AppLanguage } from "@src/stores/LanguageStore/LanguageStore.types";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { StyledDiv } from "../../StyledDiv";
import { languages } from "./LanguageSelect.data";
import { StyledTranslateIcon } from "./LanguageSelect.styles";

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledTranslateIcon
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <LanguageSelector
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

const LanguageSelector = withOverlay(
  observer(() => {
    const { setLanguage } = languageStore;

    const onCardClick: React.MouseEventHandler = (e) => {
      e.stopPropagation();
    };

    const handleLanguageChange = (lang: AppLanguage) => {
      return function () {
        setLanguage(lang);
      };
    };

    return (
      <StyledDiv onClick={onCardClick}>
        {languages.map((lang) => (
          <Button
            disabled={lang === languageStore.language$}
            sx={{ width: "100%" }}
            onClick={handleLanguageChange(lang)}
            key={lang}
          >
            {lang}
          </Button>
        ))}
      </StyledDiv>
    );
  }),
);
