import React from 'react'

const RegisteredUsers = ({allUsers}) => {
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
                <button className='btn btn-warning mx-2'>Edit</button>
                <button className='btn btn-danger mx-2'>Delete</button>
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