
import { useUsersData } from 'hooks/useUsersData'
import React from 'react'
import {Fragment,useState} from 'react'
import UserService from 'services/UserService';
import UserEditRow from './UserEditRow';
import UserViewRow from './UserViewRow';

const UsersList = () => {
  const {users, errMsg} = useUsersData();
  const [editUserId, setEditUserId] = useState(null);//usf
  const [editFormData, seteditFormData] = useState({
      name:"",
      email:"",
      password:"",
      type:""
  }); 
  const [addFormData, setaddFormData] = useState({
    name:"",
    email:"",
    password:"",
    type:""
  });



//handling methods
//cpf
//view only row
const handlEditClick = (event, user) => {
     event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
        name:user.name,
        email:user.email,
        password:user.password,
        type:user.type
    }

    seteditFormData(formValues)

};
const handleCancelClick = () => {
     setEditUserId(null);
};


//edit only row
const handleEditFormSubmit = (event)=>{
    event.preventDefault();
    const editUser = {
        name:editFormData.name,
        email:editFormData.email,
        password:editFormData.password,
        type:editFormData.type
    }
    UserService.updateUser(editUserId, editUser).then((response)=>{
        console.log(response.data);
        setEditUserId(null);
    }).catch((err)=>{
        console.log(err.response.data.message);
    })
}

const handleEditFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newEditFormData = {...editFormData};
    newEditFormData[fieldName] = fieldValue;

    seteditFormData(newEditFormData);
}

const handleDeleteClick = (userId) => {
    UserService.deleteUser(userId).then((response)=>{
        console.log("delete successfully!");
    }).catch((err)=>{
        console.log(err.response.data.message);
    })
     
};
//add user form
const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        name:addFormData.name,
        email:addFormData.email,
        password:addFormData.password,
        type:addFormData.type
    }
    UserService.createUser(newUser).then((response)=>{
        console.log("create successfully!");
    }).catch((err)=>{
        console.log(err.response);
    })

 
}

const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newAddFormData = {...addFormData};
    newAddFormData[fieldName] = fieldValue;

    setaddFormData(newAddFormData);

}

  return (
    <div className="app-container">
        {/* add new user */}
        <div>
        <h2>Add a new user</h2>
        <form onSubmit={handleAddFormSubmit} className="add_new_form">
            <label>Name: </label>
            <input name='name' placeholder='enter a name here' onChange={handleAddFormChange}/>
            <label>Email: </label>
            <input name='email' placeholder='enter a email here' onChange={handleAddFormChange}/>
            <label>Password: </label>
            <input name='password' placeholder='enter a password here' onChange={handleAddFormChange}/>
            <label>Role Type: </label>
            <select name='type' onChange={handleAddFormChange}>
                <option>Admin</option>
                <option>Customer</option>
            </select>
            <button type='submit'>ADD</button>
        </form>
        </div>
        {/* user-list */}
        <div>
        <h2>Users list</h2>
        <form onSubmit={handleEditFormSubmit}>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Role Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user)=>{
                return (
                    <Fragment key={user.id}>
                        {editUserId === user.id ? (
                            <UserEditRow 
                                user={user} 
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}/>
                        ):(
                            <UserViewRow
                                user={user}
                                handlEditClick={handlEditClick}
                                handleDeleteClick={handleDeleteClick}/>
                        )}
                    </Fragment>
                    )
                })}
            
            </tbody>
        </table>
        </form>
        </div>
    </div>
  )
}
export default UsersList
