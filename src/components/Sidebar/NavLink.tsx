import { Link, Icon, Text, LinkProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type NavLinkProps = LinkProps & {
  icon: IconType;
  title: string;
};

export function NavLink({ icon, title, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4">{title}</Text>
    </Link>
  );
}
