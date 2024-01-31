import React from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function DailyReport() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Daily-Report</h3>
          </div>
          <div className="col-md-8 d-flex justify-content-sm-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </div>
        </div>
        <hr/>
        <div className="row mt-4">
          <div className="col-md-12 mt-2">

            <Table responsive striped bordered hover >
              <thead className="bg-dark">
                <tr>
                  <th>Department</th>
                  <th> Employee ID</th>
                  <th> Name</th>
                  <th>Punch In</th>
                  <th>Punch Out</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sale</td>
                  <td>1234</td>
                  <td>Rakesh sahu</td>
                  <td>26/01/2024 10:42</td>
                  <td>26/01/2024 15:42</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>Sale</td>
                  <td>1234</td>
                  <td>Rakesh sahu</td>
                  <td>26/01/2024 10:42</td>
                  <td>26/01/2024 15:42</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>Sale</td>
                  <td>1234</td>
                  <td>Rakesh sahu</td>
                  <td>26/01/2024 10:42</td>
                  <td>26/01/2024 15:42</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>Sale</td>
                  <td>1234</td>
                  <td>Rakesh sahu</td>
                  <td>26/01/2024 10:42</td>
                  <td>26/01/2024 15:42</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>Sale</td>
                  <td>1234</td>
                  <td>Rakesh sahu</td>
                  <td>26/01/2024 10:42</td>
                  <td>26/01/2024 15:42</td>
                  <td>Bhopal</td>
                </tr>
              </tbody>
            </Table>
        
          </div>
        </div>
      </div>
    </div>
  );
}
