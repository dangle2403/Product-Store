import { Container, VStack, Text, Link } from "@chakra-ui/react"


const Homepage = () => {
  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30px"}
          fontWeight={"bold"}
          bgGradient="to-r" gradientFrom="cyan.200" gradientTo="cyan.700"
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No products found 🥲{" "}
        </Text>
        <Link href="/create" color="cyan.400" fontWeight={"bold"}>
          <Text>
            Create a product
          </Text>
        </Link>
      </VStack>
    </Container>

  )
}

export default Homepage