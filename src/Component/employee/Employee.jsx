import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";
import Accordion from "react-bootstrap/Accordion";



function Employee() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const statusColor = {
    Complete: "primary",
    Pending: "danger",
    Comleted: "success",
  };

  const getData = () => {
    axios
      .get("http://192.168.1.13:81/Task_WebService.asmx/getAllTask", {
        headers: {
          "Content-Type": "text/xml",
        },
      })
      .then(function (response) {
        // handle success
        // console.log("task management detail", response);
        setTasks(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(tasks);

  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-4 col-md-4">
            <h3>Employee-Assign-Detail</h3>
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
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="mb-3" controlId="taskName">
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
                          <Form.Group className="mb-3" controlId="clientName">
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
                          <Form.Group className="mb-3" controlId="clientNo">
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
                          <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label className="fw-bold">
                              Start Date
                            </Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="mb-3" controlId="endDate">
                            <Form.Label className="fw-bold">
                              End Date
                            </Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="mb-3" controlId="assignBy">
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
                          <Form.Group className="mb-3" controlId="assignTo">
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
                <tr  className="p-3">
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HR Code</td>
                  <td>123</td>
                  <td>Shilpa Singh</td>
                  <td>Radhe</td>
                  <td>
                 <p>  Make this website Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Provident, ex dolorem facilis officia
                    nihil ipsum illum quibusdam nemo nostrum? Dolorem.</p>
                  
                  </td>
                  <td>Nitesh Malviya</td>
                  <td>8512445623</td>
                  <td>22/01/24</td>
                  <td>22/02/24</td>
                  <td>Working</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <Table responsive striped hover bordered className="border-danger">
              <thead className="table-secondary table-dark">
                <tr >
                  <th>Task Name</th>
                  <th>Task Location</th>
                  <th>Assign To</th>
                  <th>Client Name</th>
                  <th>Client No.</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  {/* <th>Description</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody  >
                {tasks?.getTask &&
                  tasks?.getTask.map((task, index) => (
                    <tr key={index} >
                      <td>{task.TASKNAME}</td>
                      <td>{task.TASKADDRESS}</td>
                      <td>{task.USERID_ASSIGNTASK}</td>
                      <td>{task.CLIENTNAME}</td>
                      <td>{task.CLIENTNUMBER}</td>
                      <td> {task.STARTDATE}</td>
                      <td>{task.ENDDATE}</td>
                      {/* <td>
                        <Accordion
                          defaultActiveKey="0"
                          style={{ width: "300px" }}
                        >
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Click</Accordion.Header>
                            <Accordion.Body>
                              Make this website Lorem, ipsum dolor sit amet
                              consectetur adipisicing elit. Provident, ex
                              dolorem facilis officia nihil ipsum illum
                              quibusdam nemo nostrum? Dolorem.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </td> */}
                      <td>
                        <Badge bg={statusColor[task.STATUS]} className="p-2">
                          {" "}
                          {task.STATUS}
                        </Badge>
                      </td>
                      <td>
                        {" "}
                        <Button
                          variant="warning"
                          onClick={() => setAction(true)}
                        >
                          <i class="fa-solid fa-pen"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
        <Modal
          show={action}
          onHide={() => setAction(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Assign Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12 ">
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Task Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Task Name" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Client Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Client Name"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Client No.</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Client No."
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Start Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">End Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Assign By</Form.Label>
                      <Form.Control type="text" placeholder="Enter Assign By" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Assign To</Form.Label>
                      <Form.Control type="text" placeholder="Enter Assign To" />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                </div>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setAction(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Employee;
