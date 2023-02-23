import { Box, FlexProps } from '@chakra-ui/react';

type FormProps = FlexProps & {
  children: React.ReactNode;
};

export const Form = (props: FormProps) => {
  return (
    <Box as="form" bg="gray.800" p="8" borderRadius={8} {...props}>
      {props.children}
    </Box>
  );
};
