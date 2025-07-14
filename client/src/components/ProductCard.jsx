import {
  Box,
  Image,
  Text,
  Heading,
  HStack,
  IconButton,
  Dialog,
  Stack,
  Input,
  Button,
  Portal,
  Field,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../store/product.js";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      alert(message);
    } else {
      alert(message);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    if (!success) {
      alert(message);
    } else {
      toaster.create({
        title: "Update Product",
        description: message,
      });
      setIsOpen(false);
    }
  };

  return (
    <Box
      m={3}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY  (1.05)", shadow: "xl" }}
    >
      <Image
        src={updatedProduct.image}
        alt={updatedProduct.name}
        h={48}
        w="full"
        objectFit="cover"
      ></Image>
      <Box p={4}>
        <Heading as="h3" fontWeight="bold" color="cyan.500" mb={2}>
          {updatedProduct.name}
        </Heading>
        <Text fontSize="sm" color="gray.400" mb={2}>
          Price: ${updatedProduct.price}
        </Text>
        <HStack>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <IconButton colorPalette="cyan">
                <FaEdit />
              </IconButton>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Edit Product Information</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body pb="4">
                    <Stack gap="4">
                      <Field.Root>
                        <Field.Label>Name</Field.Label>
                        <Input
                          placeholder="Name"
                          name="name"
                          value={updatedProduct.name}
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              name: e.target.value,
                            })
                          }
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Price</Field.Label>
                        <Input
                          placeholder="Price"
                          name="price"
                          value={updatedProduct.price}
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              price: e.target.value,
                            })
                          }
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Image URL</Field.Label>
                        <Input
                          placeholder="Image URL"
                          name="image"
                          value={updatedProduct.image}
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              image: e.target.value,
                            })
                          }
                        />
                      </Field.Root>
                    </Stack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button
                      onClick={() =>
                        handleUpdateProduct(product._id, updatedProduct)
                      }
                    >
                      Update
                    </Button>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
          <IconButton
            colorPalette="green"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <MdDeleteForever />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
