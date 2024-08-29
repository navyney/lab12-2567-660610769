import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        {/*Display activated theme message here (EN or TH)*/}
        {theme.name === "dark" ? lang.detail.darkActivated : lang.detail.lightActivated}
      </p>
    </div>
  );
};
