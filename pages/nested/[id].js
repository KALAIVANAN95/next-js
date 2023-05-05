import { Stack, Typography } from "@mui/material";
import React from "react";
import Head from "next/head";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();

  const paths = result.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const result = await response.json();

  return {
    props: { user: result },
  };
};
const Detail = ({ user }) => {
  console.log(user, "user");
 
  
 
  return (
    <>
      {/* <Head>
      <meta name={user.name} content={user.username} key={user.username}/>
      </Head> */}

      <Head>
  <title>Testing Examples</title>
  <meta name={user.name} content={user.username}/>
  <meta name="description" content="Testing Examples" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://devjam.org" />
  <meta property="og:title" content="Dev Jamddd" />
  <meta property="og:description" content="Build weekly projects to improve your skillsd" />
  <meta property="og:image" content="https://devjam.org/assets/images/astronaut.png" />

</Head>
      {/* <meta name="description" content={description}></meta> */}
      <Stack spacing={5} m={20}>
        <Typography variant="subtitle1" color="gray">
          {user.name}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          {user.username}
        </Typography>

        <Typography variant="h6" color="gray">
          {user.email}
        </Typography>
      </Stack>
    </>
  );
};

export default Detail;
