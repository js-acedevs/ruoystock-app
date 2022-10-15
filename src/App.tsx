import { useState } from 'react';
import { Outlet, Router } from '@tanstack/react-location';
import { rankRoutes } from '@tanstack/react-location-rank-routes';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import { routes, location } from './routes/routes';
import { NavbarLayout, HeaderLayout } from './components/templates';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <Router location={location} routes={routes} filterRoutes={rankRoutes}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            header={<HeaderLayout />}
            navbar={<NavbarLayout />}
            styles={({ colors }) => ({
              main: { background: colorScheme === 'dark' ? colors.dark[8] : colors.gray[0] }
            })}>
            <Outlet />
          </AppShell>
          <ReactLocationDevtools position="bottom-right" />
        </MantineProvider>
      </ColorSchemeProvider>
    </Router>
  );
};

export default App;
