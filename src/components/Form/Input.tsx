import { FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

type CustomInputProps = InputProps & {
  label?: string;
};

const BaseInput: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (props: CustomInputProps, ref) => {
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
        ref={ref}
        {...props}
      />
    </FormLabel>
  );
};

const Input = forwardRef(BaseInput);

export { Input };
