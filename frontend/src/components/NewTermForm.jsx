import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import axios from 'axios';
import { useAlert } from 'react-alert'



function NewTermForm() {
  const API_URL = "http://localhost:8000/api/terms/";
  const alert = useAlert()
  const [post, setPost] = useState({
    name: '',
    source: '',
    body: ''
  });
  
  const handleSubmit = async() => {  
    try {
      // Alert not working properly      
      const response = await axios.post(API_URL, post)
      setPost(response.data )
      alert.show('Term added to API!')
    } catch(error) {
      alert.show('Term not added to API!')
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
  }
  

  return (
    
    <div className="mx-auto w-50 ">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="m-1">                   
          <Input
            name="name"
            placeholder="Name"            
            type="text"
            value={post.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="m-1">         
          <Input
            name="source"
            placeholder="Source"
            type="text"
            value={post.source}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="m-1">        
          <Input
            name="body"
            placeholder="Description"
            className="form-control"
            type="textarea"
            value={post.body}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
        
      </Form>
    </div>
  )
}

export default NewTermForm;
