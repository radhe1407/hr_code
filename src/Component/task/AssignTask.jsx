import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function AssignTask() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container ms-2 mt-5">
        <div className="row ">
          <div className="col-md-4 col-md-4">
            <h3>Assign-Task-Detail</h3>
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
                Assign
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Assign Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="col-md-12 ">
                    <Form>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Employee Id
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Employee Id"
                            />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Employee Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Employee Name"
                            />
                          </Form.Group>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Task Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Task Name"
                            />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Client Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Client Name"
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Client No.
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Client No."
                            />
                          </Form.Group>
                        </div>
                       
                      </div>
                      <div className="row">
                      <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              Start Date
                            </Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                              End Date
                            </Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                             Assign By
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Assign By"
                            />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="fw-bold">
                             Assign To
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Assign To"
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                      </div>

                      {/* <Form.Group
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
                      </Form.Group> */}
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
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Employee Id</th>
                  <th>Assign By</th>
                  <th>Assign To</th>
                  <th>Description</th>
                  <th>Client Name</th>
                  <th>Client No.</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Rakesh Sahu</td>
                  <td>Make this website</td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                </tr>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Rakesh Sahu</td>
                  <td>Make this website</td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                </tr>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Rakesh Sahu</td>
                  <td>Make this website</td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                </tr>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Rakesh Sahu</td>
                  <td>Make this website</td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                </tr>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Rakesh Sahu</td>
                  <td>Make this website</td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignTask;
