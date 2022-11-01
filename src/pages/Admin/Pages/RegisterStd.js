import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Loader from '../../../components/loader/loader'
import { getData } from '../../../config/firebaseMethods'

function RegisterStd() {

  const [registerStd, setRegisterStd] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getRegisterSTD = () => {
    return getData('StdData/')
      .then((res) => {
        setRegisterStd(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getRegisterSTD()
  }, [])


  return (
    <div className='mx-4'>
      {isLoading ? 
      ( <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'        
      }}>
        <CircularProgress/>
      </Box> ) : (
       <>
       <Typography variant="p" className="display-3">Student List</Typography>
        <table className="table table-bordered w-90 table-striped mt-2" style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Courses</th>
              <th>Section</th>
              <th>Date Of Birth</th>
              <th>Contact</th>
              <th>CNIC</th>
              <th>Father Name</th>
              <th>Father CNIC</th>
              <th>Father Contact</th>
              <th>Emergency Contact</th>
            </tr>
          </thead>
          {registerStd.map((e, i) => {
            return <tbody key={i}>
              <tr>
                <td scope='row'>{i}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.courses}</td>
                <td>{e.section}</td>
                <td>{e.date}</td>
                <td>{e.contact}</td>
                <td>{e.cnic}</td>
                <td>{e.fatherName}</td>
                <td>{e.fatherCnic}</td>
                <td>{e.fatherContact}</td>
                <td>{e.emergencyContact}</td>
              </tr>
            </tbody>
          })}
        </table>
       </>
        )
      }
    </div>
  )
}

export default RegisterStd