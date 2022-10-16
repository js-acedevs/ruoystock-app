import { Box, Navbar, ScrollArea } from '@mantine/core';
import {
  IconAlertCircle,
  IconDatabase,
  IconGitPullRequest,
  IconMessages,
  IconUsers
} from '@tabler/icons';
import { useQueryClient } from '@tanstack/react-query';
import { getUsers } from 'pages/UsersPage';
import { NavbarUser, Navlink } from './../molecules/index';

export const NavbarLayout = () => {
  const queryClient = useQueryClient();

  return (
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <Navlink
            icon={<IconUsers size={16} />}
            color="cyan"
            label="Users"
            to="/users"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onMouseEnter={async () => {
              await queryClient.prefetchQuery(['users'], getUsers, {
                staleTime: 10 * 1000 // only prefetch if older than 10 seconds
              });
            }}
          />
          <Navlink
            icon={<IconGitPullRequest size={16} />}
            color="blue"
            label="Pull Requests"
            to=""
          />
          <Navlink icon={<IconAlertCircle size={16} />} color="teal" label="Open Issues" to="" />
          <Navlink icon={<IconMessages size={16} />} color="violet" label="Discussions" to="" />
          <Navlink icon={<IconDatabase size={16} />} color="grape" label="Databases" to="" />
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <NavbarUser />
      </Navbar.Section>
    </Navbar>
  );
};
