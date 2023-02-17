import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { Link } from '@tanstack/react-location';
import { NavlinkProps } from './Navlink.types';

export const Navlink = ({ icon, color, label, to, ...rest }: NavlinkProps) => (
  <UnstyledButton
    component={Link}
    to={to}
    sx={(theme) => ({
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
      }
    })}
    {...rest}>
    <Group>
      <ThemeIcon color={color} variant="light">
        {icon}
      </ThemeIcon>

      <Text size="sm">{label}</Text>
    </Group>
  </UnstyledButton>
);
