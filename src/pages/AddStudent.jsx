import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const AddStudent = () => {
  const [ student, setStudent] = useState({
    name: '',
    course: '',
    email: '',
    phone: ''
  })

  const [message, setMessage] = useState(null)

  const handleInput = (event) => {
        setStudent((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://www.form.test/api/add-student', student)
    if(response.data.status === 200)
    {
      console.log(response.data.message);
      setMessage(response.data.message)
      setStudent({
        name: '',
        course: '',
        email: '',
        phone: ''
      })
    }

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Add Student
                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
              </h4>
            </div>
            <div className="card-body">

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Student Name</label>
                  <input type="text" name="name" onChange={(e) => handleInput(e)} value={student?.name} className="form-control"/>
                </div>
                <div className="form-group mb-3">
                  <label>Student Course</label>
                  <input type="text" name="course" onChange={(e) => handleInput(e)} value={student?.course} className="form-control"/>
                </div>
                <div className="form-group mb-3">
                  <label>Student Email</label>
                  <input type="text" name="email" onChange={(e) => handleInput(e)} value={student?.email} className="form-control"/>
                </div>
                <div className="form-group mb-3">
                  <label>Student Phone</label>
                  <input type="text" name="phone" onChange={(e) => handleInput(e)} value={student?.phone} className="form-control"/>
                </div>
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">Save student</button>
                </div>
                <div className="form-group mb-3">
                  <p>{message !== null ? message : ''}</p>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent