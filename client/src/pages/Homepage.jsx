import { Container, VStack, Text, Link, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
        {products.length > 0 ? (
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={8} w="full"
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>)
          : (
          <VStack>
            <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
              No products found 🥲

            </Text>
            <Link href="/create" color="cyan.400" fontWeight={"bold"}>
              <Text>
                Create a product
              </Text>
            </Link>
          </VStack>
          )}


      </VStack>
    </Container>

  )
}

export default Homepage