import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <VStack pt="1em">
        <Heading size={"4xl"}>
          Ai-ms
        </Heading>
      </VStack>
    </Container >
  )
}

export default Home
