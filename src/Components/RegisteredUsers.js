import React from 'react'
import { useState } from 'react'

const RegisteredUsers = ({allUsers, deleteUser, editUser}) => {
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
  const [editedIndex, seteditedIndex] = useState(0)
  const [editedUser, seteditedUser] = useState({})
  
  const edit = (index)=>{
    seteditedIndex(index)
    console.log( "user index is" + index) 
    let selectedUser = allUsers[index]
    seteditedUser(selectedUser)
    setfirstname(selectedUser.firstname)
    setlastname(selectedUser.lastname)
    setemail(selectedUser.email)
    setphoneNum(selectedUser.phoneNum)
    setdateOfbirth(selectedUser.dateOfBirth)
    setgender(selectedUser.gender)
    setpassword(selectedUser.pasword)
  }
  return (

    <>
      <h1 className='text-center bg-secondary text-white py-2'>Dear Admin, welcome to Registered Users page!</h1>
      <table className='table table-striped text-center'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Password</th>
            <th>Reg. Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {
          allUsers.map((eachUser, index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{eachUser.firstname}</td>
              <td>{eachUser.lastname}</td>
              <td>{eachUser.email}</td>
              <td>{eachUser.phoneNum}</td>
              <td>{eachUser.gender}</td>
              <td>{eachUser.dateOfBirth}</td>
              <td>{eachUser.password}</td>
              <td>{eachUser.regDate}</td>
              <td>{eachUser.regTime}</td>
              <td>
                
                <button className='btn btn-warning mx-2 my-1' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edit(index)}>Edit</button>
                {/* Modal  */}
                <div className="modal fade" data-bs-backdrop="static" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-success text-white">
                        <h1 className="modal-title fs-4 " id="exampleModalLabel">Welcome {editedUser.firstname}</h1>
                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <h3 className='text-center text-success my-3'>Edit your details here:</h3>
                        <input type="text"  placeholder='Enter Your First Name' className='my-2 form-control' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
                        <input type="text" placeholder='Enter Your Last Name' className='my-2 form-control' onChange={(e)=>(setlastname(e.target.value))} value={lastname}/>
                        <input type="email" placeholder='Enter Your Email Address' className='my-2 form-control' onChange={(e)=>(setemail(e.target.value))} value={email}/>
                        <input type="tel"  placeholder='Enter Your Phone Number' className='my-2 form-control' onChange={(e)=>(setphoneNum(e.target.value))} value={phoneNum}/>
                        <div className='d-flex  my-2 form-control'>
                          <span>Date of birth:</span>
                          <input type="date"  placeholder='Date of Birth:' className='mx-2' onChange={(e)=>(setdateOfbirth(e.target.value))} value={dateOfBirth}/>
                        </div>
                        <select  className='my-2 p-2 w-100 rounded-3' name="" id="" onChange={(e)=>(setgender(e.target.value))} value={gender}>
                          <option value="">Select Your Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <input type="password" placeholder='Enter Your Password' className='mt-2 form-control' onChange={(e)=>(setpassword(e.target.value))} value={password}/>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>editUser(editedIndex,{firstname,lastname,email,phoneNum,dateOfBirth,gender,password, regDate,regTime})}>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))
         }
        </tbody>
      </table>

    </>
  )
}
export default RegisteredUsers