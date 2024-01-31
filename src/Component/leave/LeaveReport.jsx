import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function LeaveReport() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-4 col-md-4">
            <h3>Leave-Report</h3>
          </div>
          <div className="col-md-8 col-md-8 d-flex justify-content-sm-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <div>
              <Button variant="success" onClick={handleShow}>
              Apply Leave
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Leave Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="col-md-12 ">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Fisrt Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Leave Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option> select </option>
                          <option value="1">Sick Leave</option>
                          <option value="2">Casual Leave</option>
                          <option value="3">Maternity Leave</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-md-12 ">
            <Table responsive striped  hover  className="p-3">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Mobile No.</th>
                  <th>Adhar No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Bhopal</td>
                  <td>8562336254</td>
                  <td>751262354</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Bhopal</td>
                  <td>8562336254</td>
                  <td>751262354</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Bhopal</td>
                  <td>8562336254</td>
                  <td>751262354</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Bhopal</td>
                  <td>8562336254</td>
                  <td>751262354</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default LeaveReport;
