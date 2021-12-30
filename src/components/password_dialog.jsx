/* eslint-disable brace-style */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'
import { isVerified, daysBetween } from '../util'

const PasswordField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white',
      'border-width': '2px'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
})

const VIEWED_KEY = 'viewed'

const PasswordDialog = () => {
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem(VIEWED_KEY)
    if (!saved) return true

    const lastUsed = new Date(saved)
    const now = new Date()
    const daysSince = daysBetween(now, lastUsed)

    if (daysSince > 2) {
      localStorage.removeItem(VIEWED_KEY)
      return true
    }

    return false
  })
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState(undefined)
  const valueRef = useRef('')

  const handleClose = (_value, reason) => {
    if (reason !== 'backdropClick') {
      const verified = isVerified(valueRef.current.value)

      if (verified) {
        setOpen(!verified)
        localStorage.setItem(VIEWED_KEY, new Date())
      } else {
        setError(true)
        setErrorText('Incorrect Password')
      }
    }
  }

  return (
    <Dialog
      id="password_dialog"
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
    >
      <DialogTitle id="password_dialog_title">
        Hola! 👋🏼 What's the password friend?
      </DialogTitle>
      <DialogContent id="password_dialog_field_content">
        <PasswordField
          id="password_dialog_field"
          inputRef={valueRef}
          error={error}
          helperText={errorText}
          autoFocus
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button id="password_dialog_btn" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PasswordDialog
