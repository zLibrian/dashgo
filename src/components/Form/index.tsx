import { Flex, FlexProps } from '@chakra-ui/react';

type FormProps = FlexProps & {
  children: React.ReactNode;
};

export const Form = (props: FormProps) => {
  return (
    <Flex
      as="form"
      w="100%"
      maxW="360px"
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      {...props}
    >
      {props.children}
    </Flex>
  );
};
