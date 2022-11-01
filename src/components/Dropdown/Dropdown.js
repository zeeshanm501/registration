import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function MuiSelect(props) {
    const { label, onChange, value, name, error, fullWidth, id, labelId, dataSource, required } = props
    return (
        <>
            <FormControl fullWidth required={required}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id={id}
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                >
                    {dataSource.map((e, i) => {
                        return <MenuItem value={e.option} key={i}>{e.option}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default MuiSelect