import { Container, VStack, Box, Heading, Input, Button } from '@chakra-ui/react';
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from '../store/product.js';
import { useState } from 'react';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });


  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);

  if (!success) {
    alert(message);
  } else {
    alert(message);
  }
};
  return (
    <Container maxW={"Container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack>
            <Input
              placeholder ={"Product Name"}
              name={"name"}
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
            ></Input>
            <Input
              placeholder ={"Price"}
              name={"price"}
              type={"number"}
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
            ></Input>
            <Input
              placeholder ={"Image URL"}
              name={"image"}
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            ></Input>
            <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage