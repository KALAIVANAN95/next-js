import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
   <Stack spacing={5} mt={10} mb={20}>
     <Head>
          <title>Next | About</title>
          <meta name="keyword" contact="home" />
        </Head>
    <Typography variant='h3'>About</Typography>
    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nihil at nobis quam provident nulla quidem ex. At, similique! Sapiente!</Typography>
    </Stack>
  )
}

export default About