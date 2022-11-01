import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, createTheme, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogIn } from '../../config/firebaseMethods'

function Login() {

    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    // fields data push
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const [helperText, setHelperText] = useState("")

    const handleSubmit = () => {
        setLoading(true)
        handleLogIn({ email, password })
            .then((success) => {
                setLoading(false)
                if (success.id == 'Cffzm9LLe3eKdvzqgZWXTWz7Hb43') {
                    navigate(`/admin/Cffzm9LLe3eKdvzqgZWXTWz7Hb43`)
                } else {
                    navigate(`/admin/${success.id}`)
                }
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }
    // fields data push

    // Password Field
    const [values, setValues] = useState({
        showPassword: false
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    // Password Field
    return (
        <>
            <Box sx={{ backgroundColor: '#fff' }}>
                <Grid container justifyContent='center' alignItems='center' height='100vh'>
                    <Grid item md={4} xs={10}>
                        <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', p: 5, borderRadius: '10px', backgroundColor: '#fff' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box className='d-flex justify-content-center align-items-center text-center mb-2'>
                                    <Typography variant='h4' className='text-center'>Login</Typography>
                                </Box>
                                <TextField
                                    margin='dense'
                                    id="outlined-email"
                                    label="Email"
                                    variant="outlined"
                                    type='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    fullWidth
                                    required
                                    error={error}
                                />
                                <FormControl
                                    margin='dense'
                                    variant='outlined'
                                    fullWidth
                                    required
                                    error={error}
                                >
                                    <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                                    <OutlinedInput
                                        id='outlined-adornment-password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    edge='end'
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        name='password'
                                        label='Password'
                                    ></OutlinedInput>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                textAlign: 'center',
                                my: 2
                            }}>
                                {isLoading ? <CircularProgress /> :
                                    <Button variant='contained'
                                        onClick={handleSubmit}
                                        sx={{
                                            backgroundColor: '#1d3557',
                                            mt: 1,
                                            '&:hover': {
                                                backgroundColor: '#457b9d'
                                            }
                                        }}>Submit</Button>
                                }
                            </Box>
                            <Typography variant='subtitle1' className='text-center'>Need an account? <Link to='/'>Sign Up</Link></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login