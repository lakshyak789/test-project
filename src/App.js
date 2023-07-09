import React from 'react';
import { ChakraProvider, Box, Grid, Image, Text, Heading, Center } from '@chakra-ui/react';
import { useQuery } from "graphql-hooks";
import './App.css'

const HOMEPAGE_QUERY = `query {
  sadhguruFigmaApp {
    columnStructure {
      benefits
      image {
        url
      }
    }
    bgImage {
      url
    }
    headingImg {
      url
    }
    heading
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10
    }
  });
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    // <ChakraProvider>
    //   <Box p={4}
    //   backgroundImage={`url(${data.sadhguruFigmaApp.bgImage.url})`}
    //   backgroundSize="cover"
    //   minHeight="713px"
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
    //   clipPath= "polygon(0% 0%, 100% 10%, 101% 95%, 0% 95%)"
    //   >
    //     <Box textAlign="center" width="100%">
    //   <Heading as="h1" size="xl" mt={8}>
    //     Heading
    //   </Heading>
    //   <Center mt={4}>
    //     <Image src="path/to/image.png" alt="Image" />
    //   </Center>
      
    // </Box>
    //   <Grid templateColumns="repeat(5, 1fr)" gap={12} 
    //     maxWidth="80%"
    //     margin="auto">
    //       {data.sadhguruFigmaApp.columnStructure.map((column, index) => (
    //         <Box key={index} height="0px">
    //           <Image 
    //           margin="auto" src={column.image.url} alt={`Image ${index}`} />
    //           <Text
    //            textAlign="center"
    //            color="white" mt={2}>{column.benefits}</Text>
    //         </Box>
    //       ))}
    //     </Grid>
    //   </Box>
    // </ChakraProvider>

   
    <Box
      backgroundImage={`url(${data.sadhguruFigmaApp.bgImage.url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height= "100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      clipPath= "polygon(0% 0%, 100% 10%, 101% 95%, 0% 95%)"
    >
      <Center flexDirection="column">
        <Heading as="h1" size="xl" color="white" textAlign="center" mb={8}>
        {`${data.sadhguruFigmaApp.heading}`}
        </Heading>
        <Image
          src={`${data.sadhguruFigmaApp.headingImg.url}`}
          alt="Logo"
          marginBottom="5rem"
        />
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={16}
          justifyContent="center"
          alignItems="center"
          maxWidth="80%"
        >
          {data.sadhguruFigmaApp.columnStructure.map((column, index) => (
            <Box key={index}>
              <Image 
              margin="auto" src={column.image.url} alt={`Image ${index}`} />
              <Text
               textAlign="center"
               color="white" mt={2}>{column.benefits}</Text>
            </Box>
          ))}
        </Grid>
      </Center>
    </Box>
  );
};

export default App;

