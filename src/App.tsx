import { Container, MantineProvider, Title } from '@mantine/core';
import { Outlet, Router } from '@tanstack/react-location';
import { rankRoutes } from '@tanstack/react-location-rank-routes';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';

import { location, routes } from './routes/routes';

const App = () => (
  <Router location={location} routes={routes} filterRoutes={rankRoutes}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Title align="center" pt="lg">
          Welcome to Mantine!
        </Title>
        <Outlet />
      </Container>
      <ReactLocationDevtools position="bottom-right" />
    </MantineProvider>
  </Router>
);

export default App;
