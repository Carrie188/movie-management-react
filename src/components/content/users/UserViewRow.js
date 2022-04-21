
import React from 'react'
const UserViewRow = ({user, handlEditClick, handleDeleteClick}) => {


  return (
    <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.name}</td>
        <td>{user.type}</td>
        <td>
            <button type='button' onClick={(event)=>handlEditClick(event, user)}>Edit</button>
            <button type='button' onClick={()=>handleDeleteClick(user.id)}>Delete</button>
        </td>
    </tr>
  )
}

export default UserViewRow