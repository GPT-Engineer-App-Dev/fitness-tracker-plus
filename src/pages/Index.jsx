import { Container, VStack, Heading, Text, Button, Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated!</Text>
        <Flex width="100%" justifyContent="space-around">
          <Button as={Link} to="/log-workout" colorScheme="teal" size="lg">Log Workout</Button>
          <Button as={Link} to="/progress" colorScheme="teal" size="lg">View Progress</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;