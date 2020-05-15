import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Text, { TextThemes, ThemeContext } from "../components/Text";

type PageProps = {} & RouteComponentProps<{}>;

const ContextTest: React.FC<PageProps> = () => {
  const value = React.useContext(ThemeContext);
  const [theme, setTheme] = React.useState(TextThemes.dark);

  const setDark = () => {
    setTheme(TextThemes.dark);
  }

  const setLight = () => {
    setTheme(TextThemes.light);
  }

  return (
    <>
      <h1>This is context test page.</h1>
      <button onClick={setLight} >set light!</button>
      <button onClick={setDark} >set dark!</button>
      <ThemeContext.Provider
        value={theme}
      >
        <Text>テキストコンポーネント</Text>
      </ThemeContext.Provider>
    </>
  );
};

export default ContextTest;
