import { useState } from 'react';
import { Outlet, Router } from '@tanstack/react-location';
import { rankRoutes } from '@tanstack/react-location-rank-routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { routes, location } from './routes/routes';
import { NavbarLayout, HeaderLayout } from './components/templates';

export const queryClient = new QueryClient();

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <QueryClientProvider client={queryClient}>
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
            <ReactQueryDevtools initialIsOpen position="bottom-right" />
            {/* <ReactLocationDevtools position="bottom-left" /> */}
          </MantineProvider>
        </ColorSchemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
