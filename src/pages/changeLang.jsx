import { useContext } from "react";
import { langContext } from "./LanguageContext";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(langContext);

  return (
    <div>
      <div className="btn btn-danger" onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}>
        {contextLang}
      </div>
    </div>
  );
}
