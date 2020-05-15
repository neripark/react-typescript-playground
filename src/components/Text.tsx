import * as React from "react";

export const TextThemes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
}

export const ThemeContext = React.createContext(TextThemes.light);

const Text: React.FC = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <p style={{ background: theme.background, color: theme.foreground}}>
      {children}
    </p>
  );
};

export default Text;
