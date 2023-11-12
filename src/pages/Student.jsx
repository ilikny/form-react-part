import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Student = () => {
  const [students, setStudents] = useState(null)

  const loadStudents = async () =>{
    const response = await axios.get('http://www.form.test/api/students');
    
    if(response.data.status === 200)
    {
      setStudents(response.data.students)
    }
  }

  console.log(students)


  useEffect(()=>{
    loadStudents();
  },[])

  const deleteStudent = async (e, id) =>{
    const response = await axios.delete(`http://www.form.test/api/delete-student/${id}`)

        if(response.data.status === 200)
    {
      console.log(response.data.message)
      loadStudents()
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Students Data
                <Link to={'/add-student'} className="btn btn-primary btn-sm float-end">Add student</Link>
              </h4>
            </div>
            <div className="card-body">

              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email ID</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  { students ? 
                  (
                    students.map((item)=>{
                       return(
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.course}</td>
                                  <td>{item.email}</td>
                                  <td>{item.phone}</td>
                                  <td>
                                    <Link to={`/edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                                  </td>
                                  <td>
                                    <button type="button" onClick={(e) => {deleteStudent(e, item.id)}} className="btn btn-danger btn-sm">Delete</button>
                                  </td>
                                </tr>
                              );
                           })
                  )
                  :
                  <tr><td colSpan="7"> <h2>Loading...</h2> </td></tr>

                  }

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student