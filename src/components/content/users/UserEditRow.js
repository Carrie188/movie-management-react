import React from 'react'

const UserEditRow = ({user, editFormData, handleEditFormChange, handleCancelClick}) => {

   
  return (
    <tr >
        <td>{user.id}</td>
        <td>
            <input type="text" name='emal' required="required" defaultValue={user.email} onChange={handleEditFormChange}></input>
        </td>
        <td>
            <input type="text" name='name' required="required" defaultValue={user.name} onChange={handleEditFormChange}></input>
        </td>
        
        <td>
            <select name="type" defaultValue="select a role" onChange={handleEditFormChange}>
                <option>Admin</option>
                <option>Customer</option>
            </select>
        </td>
        <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancle</button>
        </td>
    </tr>
  )
}

export default UserEditRow