import { CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MuiButton } from '../../components/button/button'
import MuiSelect from '../../components/Dropdown/Dropdown'
import { MuiDatepicker, MuiInput } from '../../components/input/input'
import { pushData } from '../../config/firebaseMethods'
import './StdForm.css'

function StdForm() {

    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [formSubmit, setFormSubmit] = useState(false)

    const handleChange = (e) => {
        let newField = { [e.target.name]: e.target.value }
        setData({ ...data, ...newField })
    }

    const submitData = () => {
        setFormSubmit(true)
        console.log(data)
        alert('Do you want to Submit?')
        return pushData(data, 'StdData/')
            .then((res) => {
                setFormSubmit(false)
                console.log(res);
            })
            .catch((err) => {
                setFormSubmit(false)
                setError(true)
                console.log(err);
            })
    }

    return (
        <>
            <Box className='formBackground'>
                <Grid container justifyContent='center' alignItems='center' minHeight="100vh" spacing={3} >
                    <Grid item xs={10} md={6}>
                        <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', borderRadius: '10px', backgroundColor: '#fff', p: 4 }}>
                            <Box className='text-center mb-3'>
                                <Typography variant='p' className='display-5'>Student Registration Form</Typography>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='First Name'
                                        name='firstName'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={6} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Last Name'
                                        name='lastName'
                                        onChange={(e) => handleChange(e)}
                                        required={false}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <MuiSelect
                                        label='Courses'
                                        labelId='courses-label'
                                        name='courses'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                        dataSource={[
                                            {
                                                option: 'Web & Mobile App Hybrid'
                                            },
                                            {
                                                option: 'MERN Stack Developer'
                                            },
                                            {
                                                option: 'Digital Marketing'
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <MuiSelect
                                        label='Section'
                                        labelId='section-label'
                                        name='section'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                        dataSource={[
                                            {
                                                option: 'A'
                                            },
                                            {
                                                option: 'B'
                                            },
                                            {
                                                option: 'C'
                                            },
                                        ]}
                                    />
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <MuiDatepicker
                                    label='Date of Birth'
                                    type="date"
                                    name='date'
                                    onChange={(e) => handleChange(e)}
                                    />
                                </Grid>
                                <Grid item md={4} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Contact'
                                        name='contact'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={4} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='CNIC'
                                        name='cnic'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Father Name'
                                        name='fatherName'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={4} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Father Contact'
                                        name='fatherContact'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={4} xs={6}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Father CNIC'
                                        name='fatherCnic'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <MuiInput
                                        variant='outlined'
                                        label='Emergency Contact'
                                        name='emergencyContact'
                                        onChange={(e) => handleChange(e)}
                                        required={true}
                                        error={error}
                                    />
                                </Grid>
                                <Grid item md={12} xs={12} textAlign='center'>
                                    {formSubmit ? (
                                        <CircularProgress />
                                    ) : (
                                        <MuiButton
                                            variant='contained'
                                            label='Submit'
                                            onClick={submitData}
                                        />
                                    )}
                                </Grid>
                                <Grid item md={12} xs={12} textAlign='center'>
                                    <Typography variant='subtitle1' className='text-center'>Already Registered? <Link to='/login'>Log in</Link></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default StdForm