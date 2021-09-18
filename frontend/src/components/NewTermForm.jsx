import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import { useId } from "react-id-generator";
import axios from 'axios';


function NewTermForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const id = useId();
  const API_URL = "http://localhost:8000/api/terms";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(API_URL).then({
      name: name,
      description: description,
      origin: origin,
      id: id,
    })
  }
  
  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <FormGroup>            
          <Input
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <Input
            type="text"
            value={origin}
            onChange={e=>setOrigin(e.target.value)}
          />
          <Input
            type="textarea"
            value={description}
            onChange={e=>setDescription(e.target.value)}
          />
      
        <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default NewTermForm;
