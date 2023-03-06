import React from 'react'
import { useState } from 'react'
import SignUpPage from './Components/SignUpPage'
import RegisteredUsers from './Components/RegisteredUsers'

const App = () => {

  const [allUsers, setallUsers] = useState([])
  const createAccount=(newUser)=>{
    setallUsers([...allUsers, newUser])
  }

  return (
    <>
      <SignUpPage createUser={createAccount}/>
      <RegisteredUsers allUsers={allUsers}/>
    </>
  )
}
export default App

