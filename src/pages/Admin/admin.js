import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchAppBar from '../../components/sidebarNav/sidebarNav'
import { manageUser } from '../../config/firebaseMethods'
import Courses from './Pages/Courses'
import Quiz from './Pages/Quiz'
import RegisterStd from './Pages/RegisterStd'

function Admin() {
    useEffect(() => {
        manageUser()
            .then((res) => {
            })
            .catch((err) => {
                alert(err);
            })
    }, [])
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                <SearchAppBar header='Admin' /> &nbsp;&nbsp;&nbsp;
                </Grid>
                <Grid item xs={9}>
                    <Routes>
                        <Route path='' element={<RegisterStd />} />
                        <Route path='quiz' element={<Quiz />} />
                        <Route path='courses' element={<Courses />} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
}

export default Admin