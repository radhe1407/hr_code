import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Mainbar from './mainbar/Mainbar';

 export default function Mianbar_1({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow} className="me-2 d-lg-none d-block">
        {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props} style={{"margin-top":"70px","padding-right":"2px","width":"260px"}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{"overflow-y":"auto","padding-right":"2px"}} className='p-0'>
          <Mainbar style={{"width":"238px"}} />
        </Offcanvas.Body>
         </Offcanvas>
       
     
 
     
    </>
  );
}

