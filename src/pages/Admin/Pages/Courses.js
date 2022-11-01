import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MuiButton } from '../../../components/button/button'
import { MuiInput } from '../../../components/input/input'
import { getData, pushData } from '../../../config/firebaseMethods'
import SearchAppBar from '../../../components/sidebarNav/sidebarNav'

function Course() {

  const [isLoading, setLoading] = useState(true)
  const [formSubmit, setFormSubmit] = useState(false)
  const [data, setData] = useState()
  const [existedCourse, setCourse] = useState()

  const handleChange = (e) => {
    let newField = { [e.target.name]: e.target.value}
    setData({ ...data, ...newField })
  }



  const submitData = () => {
    setFormSubmit(true)
    console.log(data)
    alert('Do you want to Submit?')
    return pushData(data, 'Courses/')
      .then((res) => {
        setFormSubmit(false)
        console.log(res);
      })
      .catch((err) => {
        setFormSubmit(false)
        console.log(err);
      })
  }

  const getCourses = () => {
    return getData('Courses/')
      .then((res) => {
        setCourse(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className='mx-4'>
      <Grid container>     
        <Grid item md={8}>
          <Typography variant="p" className="display-3">Course Form</Typography>
          <Grid container className='mt-2' spacing={2}>
            <Grid item xs={12}>
              <MuiInput
                variant='outlined'
                label='Course Name'
                name='courseName'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiInput
                variant='outlined'
                label='Course Duration'
                name='courseDuration'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiInput
                variant='outlined'
                label='Is Form Open'
                name='isFormOpen'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiInput
                variant='outlined'
                label='No Of Quiz'
                name='noOfQuiz'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiInput
                variant='outlined'
                label='Fee In Rupees'
                name='feeInRupees'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <MuiInput
                variant='outlined'
                label='Lead Trainer'
                name='leadTrainer'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <MuiInput
                variant='outlined'
                label='Assistant Trainers'
                name='assistantTrainers'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Grid>
      {isLoading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Typography variant="p" className="display-3">Course List</Typography>
          <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th>Course Name</th>
                <th>Course Duration</th>
                <th>Is Form Open</th>
                <th>No of Quiz</th>
                <th>Fee in Rupee</th>
                <th>Lead Trainer</th>
                <th>Assistant Trainer</th>
              </tr>
            </thead>
            {existedCourse.map((e, i) => {
              return <tbody key={i}>
                <tr>
                  <td scope='row'>{i}</td>
                  <td>{e.courseName}</td>
                  <td>{e.courseDuration}</td>
                  <td>{e.isFormOpen}</td>
                  <td>{e.noOfQuiz}</td>
                  <td>{e.feeInRupees}</td>
                  <td>{e.leadTrainer}</td>
                  <td>{e.assistantTrainers}</td>
                </tr>
              </tbody>
            })}
          </table>
        </Box>
      )
      }
    </div>
  )
}

export default Course