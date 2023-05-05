import { Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const Contacts = () => {
  return (
    <Stack spacing={5} mt={10} mb={20}>
       <Head>
          <title>Next | Contact</title>
          <meta name="keyword" contact="home" />
        </Head>
    <Typography variant='h3'>Contacts</Typography>
    <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nihil at nobis quam provident nulla quidem ex. At, similique! Sapiente!</Typography>
    </Stack>
  )
}

export default Contacts