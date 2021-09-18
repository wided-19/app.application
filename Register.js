import React ,{useState } from 'react'
import {Button , Modal ,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../JS/action/AuthAction'
import { useHistory } from 'react-router-dom';


const Register = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const history  =useHistory()
    const [name , setName]=useState("");
    const [lastName , setLastName]=useState("");
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRegister = ()=>{
const newUser = {name , lastName ,email , password }
dispatch (registerUser(newUser))
history.push("/dashboard")
setName("")
setLastName("")
setEmail("")
setPassword("")
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Register
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          
            <Modal.Title>Register</Modal.Title>
       
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" >
    <Form.Label>First Name</Form.Label>
    <Form.Control type="texte" placeholder="First Name"  name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="texte" placeholder="Last Name"  name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
  </Form.Group>
  
  <Form.Group className="mb-3" >
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();
            handleRegister()}}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Register
