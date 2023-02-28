import { Flex, Avatar, Text, Box } from '@chakra-ui/react';

type ProfileProps = {
  showProfile?: boolean;
};

export function Profile({ showProfile }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfile && (
        <Box mr="4" textAlign="right">
          <Text>Kevin Willian</Text>
          <Text color="gray.300" fontSize="sm">
            kevinwillian084@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Kevin Willian"
        color="white"
        bg="gray.500"
        src="https://github.com/zLibrian.png"
      />
    </Flex>
  );
}
