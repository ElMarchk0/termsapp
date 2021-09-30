import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Button } from "reactstrap";
import moment from 'moment';
import { useAlert } from 'react-alert';

function TermList() {
  const [termList, setTermList]= useState([]); 
  const API_URL = "http://localhost:8000/api/terms/";
  const alert = useAlert()

  useEffect(() => {
    axios.get(`${API_URL}`).then(res => {
      setTermList(res.data);
      console.log(res.data);
    })
    
  }, [])   
  
  async function deleteTerm(id) {
    await axios.delete(`${API_URL}${id}/`).then(axios.get(`${API_URL}`));
    setTermList(termList.filter(term => term.id !== id));
    alert.show('Term deleted successfully');
  }
  
  let listToRender 
  if(termList) {
    listToRender = termList.map(term => (
      <tr key={term.id}>
        <td>{term.name}</td>
        <td>{term.body}</td>
        <td>{term.source}</td>
        <td>{moment(term.created).format('MMMM Do YYYY')}</td>
        {/* <td>{term.updated}</td> */}
        <td><Button onClick={() => deleteTerm (term.id)}>Delete</Button></td>
      </tr>
    ))
  }
  return (
    <div className="mx-auto w-75" >
      <div className="d-flex justify-content-center">
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Source</th>
              <th>Date Added</th>
              <th>Delete</th>
            </tr>          
            {listToRender}
          </tbody>
        </Table>   
      </div>
    </div>
  )
}

export default TermList;
