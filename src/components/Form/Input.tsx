import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

type CustomInputProps = InputProps & {
  label?: string;
  error?: FieldError;
};

const BaseInput: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (props: CustomInputProps, ref) => {
  return (
    <FormControl isInvalid={!!props.error}>
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
          ref={ref}
          {...props}
        />
      </FormLabel>
      {props.error && (
        <FormErrorMessage>{props.error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

const Input = forwardRef(BaseInput);

export { Input };
