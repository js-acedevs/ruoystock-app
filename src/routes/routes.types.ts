import { MakeGenerics } from '@tanstack/react-location';
import { User } from '../interfaces/User.model';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    users?: User[];
    user?: User;
  };
  Params: {
    userId: string;
  };
  Search: {
    usersView: {
      filterBy?: string;
    };
  };
}>;
