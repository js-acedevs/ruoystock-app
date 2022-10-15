import { Container, MantineProvider, Title } from '@mantine/core';

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Container>
      <Title align="center" pt="lg">
        Welcome to Mantine!
      </Title>
    </Container>
  </MantineProvider>
);

export default App;
