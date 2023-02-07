import { FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react';

type CustomInputProps = InputProps & {
  label?: string;
};

export const Input = (props: CustomInputProps) => {
  return (
    <FormLabel w="full" htmlFor={props.id || props.name}>
      {props.label}
      <ChakraInput
        id={props.id || props.name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'none',
        }}
        size="lg"
        fontSize="medium"
        {...props}
      />
    </FormLabel>
  );
};
