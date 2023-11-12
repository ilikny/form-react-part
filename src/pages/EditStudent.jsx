import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const EditStudent = () => {
  const stud_id = useParams();

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

console.log(stud_id.id);

const getStudent = async () => {
  const response = await axios.get(`http://www.form.test/api/edit-student/${stud_id.id}`)
  if(response.data.status === 200)
  {
    setStudent({
      name: response.data.student.name,
      course: response.data.student.course,
      email: response.data.student.email,
      phone: response.data.student.phone
    })
  }

}

useEffect(()=>{
  getStudent();
},[])

  const handleUpdate = async (event) => {
    event.preventDefault();

    const response = await axios.put(`http://www.form.test/api/update-student/${stud_id.id}`, student)
    if(response.data.status === 200)
    {
      console.log(response.data.message);
      setMessage(response.data.message)
    }

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Edit Student
                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
              </h4>
            </div>
            <div className="card-body">

              <form onSubmit={handleUpdate}>
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
                  <button type="submit" className="btn btn-primary">Update student</button>
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

export default EditStudent