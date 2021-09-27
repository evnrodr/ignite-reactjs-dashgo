import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Evandro Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            evandro.rodriguespj@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Evandro Rodrigues"
        src="https://github.com/evnrodr.png"
      />
    </Flex>
  );
}
