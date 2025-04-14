// src/components/MailingListForm.jsx
import React, { useState } from 'react';
import { Box, Input, Button, VStack } from '@chakra-ui/react';

const MailingListForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Submitted email: ${email}`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxW="300px" mx="auto" my={8} px={4}>
      <VStack spacing={4}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bg="white"
          color="black"
          _placeholder={{ color: 'gray.500' }}
          required
        />
        <Button type="submit" bg="brand.500" color="white" _hover={{ bg: 'brand.600' }} w="full">
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default MailingListForm;
