import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    date: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save workout data to local storage or backend
    const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    workouts.push(workout);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    // Clear form
    setWorkout({
      type: "",
      duration: "",
      date: "",
      notes: ""
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl" textAlign="center">Log Workout</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="type" isRequired>
            <FormLabel>Type of Exercise</FormLabel>
            <Input name="type" value={workout.type} onChange={handleChange} />
          </FormControl>
          <FormControl id="duration" isRequired>
            <FormLabel>Duration (minutes)</FormLabel>
            <Input name="duration" value={workout.duration} onChange={handleChange} />
          </FormControl>
          <FormControl id="date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={workout.date} onChange={handleChange} />
          </FormControl>
          <FormControl id="notes">
            <FormLabel>Notes</FormLabel>
            <Textarea name="notes" value={workout.notes} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" mt={4} width="100%">Save Workout</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default LogWorkout;