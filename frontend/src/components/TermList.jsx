import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button } from "reactstrap";

function TermList() {
  const [termList, setTermList]= useState([]) 

  const API_URL = "http://localhost:8000/api/terms/";
  useEffect(() => {
    axios.get(`${API_URL}`).then(res => {
      setTermList(res.data)
      console.log(res.data)
    })
    
  }, []) 

  function deleteTerm(id) {   
   return axios.delete(`${API_URL}${id}`)
  }
 
  let listToRender 
  if(termList) {
    listToRender = termList.map(term => (
      <tr key={term.id}>
        <td>{term.name}</td>
        <td>{term.body}</td>
        <td>{term.source}</td>
        <td>{term.created}</td>
        <td>{term.updated}</td>
        <td><Button onClick={() => deleteTerm (term.id)}>Delete</Button></td>
      </tr>
    ))
  }
  return (
    <div className="mx-auto w-75" >
      <div className="d-flex justify-content-center">
        <Table striped bordered hover variant="dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Source</th>
            <th>Date Added</th>
            <th>Date Modified</th>
          </tr>
          <tbody>
            {listToRender}
          </tbody>
        </Table>   
      </div>
    </div>
  )
}

export default TermList
