import React from 'react'
import { useState } from 'react'

const SignUpPage = ({createUser}) => {
  let dateOfReg = new Date()
  let timeOfReg = new Date()
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phoneNum, setphoneNum] = useState("")
  const [dateOfBirth, setdateOfbirth] = useState("")
  const [gender, setgender] = useState("")
  const [password, setpassword] = useState("")
  const [regDate, setregDate] = useState(dateOfReg.toLocaleDateString())
  const [regTime, setregTime] = useState(timeOfReg.toLocaleTimeString())

  return (
    <>
      <h1 className='text-center bg-secondary text-white py-2'>Welcome to sign-up page!</h1>
      <div className="container-fluid">
        <div className="row">
          <div className='col-xs-10 col-md-7 col-lg-5 mx-auto my-3 p-3 border border-success rounded-3'>
            <h1 className='text-center text-success'>Create New Account</h1>
            <input type="text" placeholder='Enter Your First Name' className='my-2 form-control' onChange={(e)=>(setfirstname(e.target.value))}/>
            <input type="text" placeholder='Enter Your Last Name' className='my-2 form-control' onChange={(e)=>(setlastname(e.target.value))}/>
            <input type="email" placeholder='Enter Your Email Address' className='my-2 form-control' onChange={(e)=>(setemail(e.target.value))}/>
            <input type="tel"  placeholder='Enter Your Phone Number' className='my-2 form-control' onChange={(e)=>(setphoneNum(e.target.value))}/>
            <div className='d-flex  my-2 form-control'>
              <span>Date of birth:</span>
              <input type="date"  placeholder='Date of Birth:' className='mx-2' onChange={(e)=>(setdateOfbirth(e.target.value))}/>
            </div>
            <select  className='my-2 p-2 w-100 rounded-3' name="" id="" onChange={(e)=>(setgender(e.target.value))}>
              <option value="">Select Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="password" placeholder='Enter Your Password' className='mt-2 form-control' onChange={(e)=>(setpassword(e.target.value))}/>
            <small className='float-end mb-2'><a href="">Forgot Password?</a></small>
            <div className='text-center mt-5'>
              <input type="checkbox"/>
              <span className='fw-bold mx-2 '>I agree with <a href="">terms and conditions</a></span>
            </div>
            <button className='btn btn-success w-100 my-2 fw-bold' onClick={()=>createUser({firstname,lastname,email,phoneNum,dateOfBirth,gender,password, regDate,regTime})}>Sign-Up</button>
            <p className='text-center fw-bold'> Already have an account? <a href="">Login here.</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUpPage