import { Container, Flex, Text, Link, HStack, Button }  from "@chakra-ui/react";

import { useColorMode } from "@/components/ui/color-mode"
import { FaPlus } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base: "column", sm: "row"}}>
        <Text>
          <Link 
            href={"/"}
            fontSize={{ base: "22px", sm: "28px"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.200" gradientTo="cyan.700"
            bgClip={"text"}
          >Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link href={"/create"}>
            <Button>
              <FaPlus fontSize={20}/>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon fontSize={20}/> : <LuSun fontSize={20}/>}
          </Button>
        </HStack>
      </Flex>
    </Container>

  )
}

export default Navbar