import { useEffect, useState } from "react";
import { Container, Heading, VStack, Box, Text, Flex } from "@chakra-ui/react";

const Progress = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedWorkouts);
  }, []);

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl" textAlign="center">Progress</Heading>
        {workouts.length === 0 ? (
          <Text>No workouts logged yet.</Text>
        ) : (
          workouts.map((workout, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Flex justifyContent="space-between">
                <Text fontWeight="bold">{workout.type}</Text>
                <Text>{workout.date}</Text>
              </Flex>
              <Text>Duration: {workout.duration} minutes</Text>
              {workout.notes && <Text>Notes: {workout.notes}</Text>}
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Progress;