import React, { useEffect } from 'react'
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './JS/actions/actionUser';

function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  console.log(users)
  return (
    <div className="App">
      <Link to='/users_list'>
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to='/add_user' >
        <Button variant="primary button">Add Contact</Button>
      </Link>
      <Routes>
        <Route path='/users_list' element={<div className="contact-list">
          {users.map((user, index) => <UserCard user={user} key={user._id} />)}
        </div>} />
        <Route path='/add_user' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
