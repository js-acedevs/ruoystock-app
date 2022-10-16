import { UnstyledButtonProps } from '@mantine/core';
import { LinkProps } from '@tanstack/react-location';

type BaseNavlinksProps = LinkProps & UnstyledButtonProps;

export interface NavlinkProps extends BaseNavlinksProps {
  to: string;
  color: string;
  label: string;
  icon: React.ReactNode;
}
