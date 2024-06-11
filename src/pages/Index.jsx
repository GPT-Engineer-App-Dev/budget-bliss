import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="background">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" my={8}>
          Financial News Today
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Top News
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 1</Heading>
              <Text mt={4}>Summary of the news article 1...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 2</Heading>
              <Text mt={4}>Summary of the news article 2...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 3</Heading>
              <Text mt={4}>Summary of the news article 3...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market Data 1</Heading>
              <Text mt={4}>Details of market data 1...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market Data 2</Heading>
              <Text mt={4}>Details of market data 2...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market Data 3</Heading>
              <Text mt={4}>Details of market data 3...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Articles
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>Summary of the article 1...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>Summary of the article 2...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 3</Heading>
              <Text mt={4}>Summary of the article 3...</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;