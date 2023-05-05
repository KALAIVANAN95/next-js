import styled from '@emotion/styled'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display:'flex',
        justifyContent:"space-between",
        background:"black"

    })
  return (
   <AppBar position='static'>
    <StyledToolBar>
        <Typography variant='h5'>Next Js</Typography>
        <Stack direction="row" justifyContent="space-between" width='20%'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/nested/contacts">Contact</Link>

        </Stack>
    </StyledToolBar>
   </AppBar>
  )
}

export default Navbar