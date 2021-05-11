import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./style.css";

function Language() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language.toUpperCase());

  useEffect(() => {
    const language = i18n.language;
    if (language === "en-GB") {
      setSelected("GB");
    }
  }, [i18n.language]);

  function handleSelect(lang) {
    i18n.changeLanguage(lang.toLowerCase());
    setSelected(lang);
  };

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={handleSelect}
      showSecondarySelectedLabel={false}
      showSelectedLabel={false}
      showOptionLabel={false}
      showSecondaryOptionLabel={false}
      fullWidth={false}
      countries={["GB", "PT"]}
    />
  );
}

export default Language;
