import type { SessionData } from "@/lib/sessions/types/SessionData";
import type { Theme } from "@/lib/themes/types/Theme";
import { useSessionStore } from "@/lib/sessions/store/hooks/react/useSessionStore";
import Themes from "@themes/Themes";
import Select from "@/components/html/{Select}/Select";
import Option from "@/components/html/{Option}/Option";
import { setSessionStore } from "@/lib/sessions/store/@actions/set/setSessionStore";

export default function ThemeSelector() {

  const initialTheme = Themes.find(t => t.name === "materialTheme");

  const sessionEntry = {
    name: "theme",
    value: initialTheme,
  } satisfies SessionData<Theme | undefined>;

  const [currentTheme, setCurrentTheme] = useSessionStore(sessionEntry.name, sessionEntry.value);
  
  return (
    <Select
      value={currentTheme.store?.name}
      onChange={(e) => {
        setCurrentTheme({ store: Themes.find(t => t.name === e.target.value) });
        setSessionStore({ name: sessionEntry.name, value: Themes.find(t => t.name === e.target.value) });
      }}
    >
      {Themes.map(theme => (
        <Option key={theme.name} value={theme.name}>
          {theme.name}
        </Option>
      ))}
    </Select>
  );
}
