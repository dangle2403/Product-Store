import { Box, Image, Text, Heading, HStack, IconButton } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../store/product.js";

const ProductCard = ({product}) => {
  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (id) => {
    const {success, message} = await deleteProduct(id);
    if (!success) {
      alert(message);
    } else {
      alert(message);
    }
  }

  return (
    <Box 
      m={3}
      shadow = "lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY  (1.05)", shadow: "xl" }}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover"></Image>
      <Box p={4}>
        <Heading as="h3" fontWeight="bold" color="cyan.500" mb={2}>{product.name}</Heading>
        <Text fontSize="sm" color="gray.400" mb={2}>Price: ${product.price}</Text>
        <HStack>
          <IconButton colorPalette="cyan" ><FaEdit /></IconButton>
          <IconButton colorPalette="green" onClick={() => handleDeleteProduct(product._id)}><MdDeleteForever /></IconButton>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard