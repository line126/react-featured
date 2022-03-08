import { useContext } from 'react';
import { ThemeContext } from './theme-context';

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }} onClick={toggleTheme}>
      I am styled by theme context!
    </button>
  );
}
