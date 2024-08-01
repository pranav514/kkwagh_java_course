// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

import { DataGrid } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'Type of Use'
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Type of Description'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'Description'
  },

  {
    flex: 0.15,
    minWidth: 120,
    field: 'city',
    headerName: 'Group'
  }
]



const FormLayoutsBasic = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
  }

  return (
    <Card>
      <CardHeader title='Type Of User Master' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField fullWidth label='Type of User' placeholder='Leonard Carter' />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='Group' placeholder='Leonard Carter' />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='Description' placeholder='Leonard Carter' />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='Type ' placeholder='Leonard Carter' />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}
              >
                <Button type='Save' variant='contained' size='large'>
                  Save
                </Button>
                <Button type='Clear' variant='contained' size='large' color='error'>
                  Clear
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& a': { color: 'primary.main', textDecoration: 'none' }
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default FormLayoutsBasic
