import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles';

const ThemeProvider = ({ children, isDarkMode }) => {

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
