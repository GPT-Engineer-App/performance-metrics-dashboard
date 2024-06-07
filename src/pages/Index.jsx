import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <HStack spacing={8} width="100%" justifyContent="space-around">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Stat>
              <StatLabel>Sales</StatLabel>
              <StatNumber>345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <IconButton aria-label="Sales" icon={<FaChartLine />} size="lg" mt={4} />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$12,345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                12.45%
              </StatHelpText>
            </Stat>
            <IconButton aria-label="Revenue" icon={<FaDollarSign />} size="lg" mt={4} />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Stat>
              <StatLabel>Customers</StatLabel>
              <StatNumber>1,234</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                3.45%
              </StatHelpText>
            </Stat>
            <IconButton aria-label="Customers" icon={<FaUsers />} size="lg" mt={4} />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
