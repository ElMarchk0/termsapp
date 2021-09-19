import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import axios from 'axios';


function NewTermForm() {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [source, setSource] = useState('');
  const API_URL = "http://localhost:8000/api/terms/";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}`).then(res => {
      setPost(res.data)
    })
  }, [])

  const handleSubmit = (evt) => {
    
    evt.preventDefault();
    axios.post(API_URL, {
      name: name,
      source: source,
      body: body,
    }).then((res) => {
      setPost(res.data);
      console.log(res.data);
    })
  }
  
  // if (!post) return "No post!"

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
            value={source}
            onChange={e=>setSource(e.target.value)}
          />
          <Input
            type="textarea"
            value={body}
            onChange={e=>setBody(e.target.value)}
          />
      
        <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default NewTermForm;
