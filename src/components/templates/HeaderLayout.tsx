import { Group, Header, Center, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { Link } from '@tanstack/react-location';
import { Logo } from '../atoms/Logo';

export const HeaderLayout = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const toggleTheme = () => toggleColorScheme();

  return (
    <Header
      height={60}
      p="sm"
      sx={({ colorScheme, colors }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${colorScheme === 'dark' ? colors.dark[4] : colors.gray[2]}`
      })}
    >
      <Group position="apart" align="center" sx={{ width: '100%' }}>
        <Center inline component={Link} to="/">
          <Logo colorScheme={colorScheme === 'dark' ? 'dark' : 'light'} />
        </Center>

        <ActionIcon variant="default" size={30} onClick={toggleTheme}>
          {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Header>
  );
};
