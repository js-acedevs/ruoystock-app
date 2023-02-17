import { Container, Table, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { GraphQLClient, gql } from 'graphql-request';
import { User } from 'interfaces/User.model';

const graphQLClient = new GraphQLClient('https://huge-grackle-24.hasura.app/v1/graphql', {
  headers: {
    'x-hasura-admin-secret': 'aHM0KFUsuWxDDRzC6FNL6qb1uyqcD3arWka1PZxowo8HfH3SGtDqG7NRQst0va7V'
  }
});

export const getUsers = async () => {
  const { users } = await graphQLClient.request(
    gql`
      query {
        users {
          id
          email
        }
      }
    `
  );
  return users;
};

const UsersPage = () => {
  const { data } = useQuery(['users'], getUsers);
  console.log('data', data);

  return (
    <Container sx={{ background: 'white' }}>
      <Title align="center" pt="lg">
        UsersPage
      </Title>

      <Table highlightOnHover bgcolor="white" p="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, email }: User) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
