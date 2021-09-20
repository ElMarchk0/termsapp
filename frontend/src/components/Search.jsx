import React from 'react'
import { Button, FormGroup, Form, Input, } from 'reactstrap';

function Search() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Input          
            type="text"
            value={search}
            // onChange={e=>setName(e.target.value)}
          />
          <Button>Search</Button> 
        </FormGroup> 
      </Form>
    </div>
  )
}

export default Search
