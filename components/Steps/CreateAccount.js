import Image from 'next/image'
import { Avatar, Button, IconButton, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInput, signUp } from '../../store/actions/userAction'
import { useState } from 'react'

const Input = styled('input')({
  display: 'none',
})

const CreateAccount = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [avatarURL, setAvatarURL] = useState('/images/Avatar.png')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signUp(user))
  }
  const onChange = (e) => {
    let { name, value } = e.target
    name === 'avatar' && (value = e.target.files[0])
    name === 'avatar' && setAvatarURL(URL.createObjectURL(value))
    const newInput = { ...user, [name]: value }
    dispatch(setUserInput(newInput))
  }

  return (
    <>
      <h3
        style={{
          fontSize: 21,
          color: '#000',
          backgroundColor: '#C5DCFA',
          padding: 8,
          textAlign: 'center',
          width: '800px',
        }}
      >
        CREATE YOUR ACCOUNT
      </h3>
      <p style={{ maxWidth: '750px', textAlign: 'center' }}>
        Because there will be documents that you need to prepare to apply for
        the loan, let's start off by creating a passwordso that you can login to
        your account once you have this documents ready.
      </p>

      {/* FORM */}
      <form
        encType="multipart/form-data"
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            name="avatar"
            onChange={onChange}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Avatar src={avatarURL} sx={{ width: 120, height: 120 }} />
          </IconButton>
          <p style={{ textAlign: 'center', margin: 0 }}>Upload</p>
        </label>
        <label htmlFor="">
          <p style={{ marginBottom: 5 }}>NAME</p>
          <TextField
            hiddenLabel
            size="small"
            id="outlined-basic"
            variant="outlined"
            style={{ display: 'flex' }}
            value={user.name}
            name="name"
            onChange={onChange}
          />
        </label>
        <label htmlFor="">
          <p style={{ marginBottom: 5 }}>EMAIL</p>
          <TextField
            type="email"
            hiddenLabel
            size="small"
            id="outlined-basic"
            variant="outlined"
            style={{ display: 'flex' }}
            value={user.email}
            name="email"
            onChange={onChange}
          />
        </label>
        <label htmlFor="">
          <p style={{ marginBottom: 5 }}>PASSWORD</p>
          <TextField
            type="password"
            hiddenLabel
            size="small"
            id="outlined-basic"
            variant="outlined"
            style={{ display: 'flex' }}
            value={user.password}
            name="password"
            onChange={onChange}
          />
        </label>
        <label htmlFor="">
          <p style={{ marginBottom: 5 }}>CONFIRM PASSWORD</p>
          <TextField
            type="password"
            hiddenLabel
            size="small"
            id="outlined-basic"
            variant="outlined"
            style={{ display: 'flex' }}
            value={user.confirm_password}
            name="confirm_password"
            onChange={onChange}
          />
        </label>
        <Button
          type="submit"
          variant="contained"
          endIcon={
            <Image src="/images/arrow-right.png" width={20} height={20} />
          }
          style={{ color: '#0A3977', backgroundColor: '#C5DCFA' }}
        >
          Save & Next
        </Button>
      </form>
    </>
  )
}

export default CreateAccount
