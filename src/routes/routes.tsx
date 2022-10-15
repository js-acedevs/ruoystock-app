import { ReactLocation, Route } from '@tanstack/react-location';
import DashboardPage from '../pages/DashboardPage';
import UsersPage from '../pages/UsersPage';
import { LocationGenerics } from './routes.types';

// Set up a ReactLocation instance
export const location = new ReactLocation<LocationGenerics>();

// Build our routes. We could do this in our component, too.
export const routes: Route<LocationGenerics>[] = [
  {
    path: '',
    children: [
      {
        path: '/', // matches /dashboard exactly
        element: <DashboardPage />
      },
      {
        path: 'teams', // matches /dashboard/teams/* (notice the fuzzy match)
        element: <div>teams</div>
      },
      {
        path: 'users', // matches /dashboard/users/*
        element: <UsersPage />
      },
      {
        element: `Render as the fallback when 'teams/' or '/users' are not matched`
      }
    ]
  }
];
