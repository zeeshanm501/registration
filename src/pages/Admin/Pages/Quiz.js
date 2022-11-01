import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MuiButton } from '../../../components/button/button'
import { MuiInput } from '../../../components/input/input'
import { getData, pushData } from '../../../config/firebaseMethods'

function Quiz() {

  const [isLoading, setLoading] = useState(true)
  const [formSubmit, setFormSubmit] = useState(false)
  const [data, setData] = useState()
  const [existedQues, setExistedQues] = useState()
  const [optionA, setOptionA] = useState("")
  const [optionB, setOptionB] = useState("")
  const [optionC, setOptionC] = useState("")
  const [optionD, setOptionD] = useState("")

  const handleChange = (e) => {
    let newField = { [e.target.name]: e.target.value, 'option': [optionA, optionB, optionC, optionD] }
    setData({ ...data, ...newField })
  }



  const submitData = () => {
    setFormSubmit(true)
    console.log(data)
    alert('Do you want to Submit?')
    return pushData(data, 'QuizQuestions/')
      .then((res) => {
        setFormSubmit(false)
        console.log(res);
      })
      .catch((err) => {
        setFormSubmit(false)
        console.log(err);
      })
  }

  const getQuizQuestion = () => {
    return getData('QuizQuestions/')
      .then((res) => {
        setExistedQues(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getQuizQuestion()
  }, [])


  return (
    <div className='mx-4'>
      <Grid container>
        <Grid item md={8}>
          <Typography variant="p" className="display-3">Quiz Form</Typography>
          <Grid container className='mt-2' spacing={2}>
            <Grid item xs={12}>
              <MuiInput
                variant='outlined'
                label='Questions'
                name='questions'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiInput
                variant='outlined'
                label='Options'
                name='options'
                onChange={(e) => setOptionA(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiInput
                variant='outlined'
                label='Options'
                name='options'
                onChange={(e) => setOptionB(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiInput
                variant='outlined'
                label='Options'
                name='options'
                onChange={(e) => setOptionC(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiInput
                variant='outlined'
                label='Options'
                name='options'
                onChange={(e) => setOptionD(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiInput
                variant='outlined'
                label='Correct Answer'
                name='correctAns'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiInput
                variant='outlined'
                label='Duration'
                name='duration'
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiInput
                variant='outlined'
                label='Total Marks'
                name='totalMarks'
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
          <Typography variant="p" className="display-3">Questions List</Typography>
          <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th>Questions</th>
                <th>Options</th>
                <th>Duration</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            {existedQues.map((e, i) => {
              return <tbody key={i}>
                <tr>
                  <td scope='row'>{i}</td>
                  <td>{e.questions}</td>
                  <td>{e.option.join(', ')}</td>
                  <td>{e.duration}</td>
                  <td>{e.totalMarks}</td>
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

export default Quiz