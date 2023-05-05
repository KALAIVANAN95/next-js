import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

import { Box, Chip, Stack, Typography } from "@mui/material";



export default function Home() {
  return (
    <>
      <Box sx={{ marginBottom: 20 }}>
      <Head>
      <title>Testing Example</title>
      <meta name="title" content="" />
      <meta name="description" content="Testing Example" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://devjam.org" />
      <meta property="og:title" content="Dev Jam" />
      <meta property="og:description" content="Build weekly projects to improve your skills" />
      <meta property="og:image" content="https://devjam.org/assets/images/astronaut.png" />

    </Head>
        <Stack alignItems="center" justifyContent="center">
          <Image src="/1.png" width={500} height={200} marginTop={20} />
          <Stack alignSelf="flex-start" spacing={5} mt={10} mb={10}>
            <Typography variant="h3">Introduction:</Typography>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              nihil at nobis quam provident nulla quidem ex. At, similique!
              Sapiente! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Velit nihil at nobis quam provident nulla quidem ex. At,
              similique! Sapiente! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit nihil at nobis quam provident nulla quidem
              ex. At, similique! Sapiente!
            </Typography>
          </Stack>
          <Link href="/nested">
            <Chip label=" Go to Users" mb={10} style={{cursor:"pointer"}} ></Chip>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
