import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

const SignUp = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
          )`
        }
      }}
    >
      <Image
        priority
        src="/__images/backdrop.jpg"
        layout="fill"
        objectFit="cover"
        alt="Backdrop Netflix"
      />
      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 2, p: 6 }}>
        <Box sx={{ bgcolor: 'common.white', p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
            Sign Up
          </Typography>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="filled"
              />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="filled"
              />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Konfirmasi Password"
                variant="filled"
              />
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <FormControlLabel
                label="Setuju dengan syarat dan ketentuan"
                control={<Checkbox />}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              Sign up
            </Button>
          </form>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Link href="/" passHref>
              <Button color="primary" variant="text">
                Sign in.
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default SignUp
