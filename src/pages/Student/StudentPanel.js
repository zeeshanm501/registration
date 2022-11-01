import React from 'react'
import StdProfile from './pages/Profile'

function StudentPanel() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <SearchAppBar header='Student' />
                </Grid>
                <Grid item xs={9}>
                    <Routes>
                        <Route path='' element={<StdProfile />} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
}

export default StudentPanel