import React from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function DailyWork() {
  return (
    <div>
      <div className="container ms-2 mt-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Daily-Work</h3>
          </div>
          <div className=" col-md-12 mt-3">
            <div className="row">
              <div className="col-md-3 col-sm-3 d-flex justify-content-start">
                <Form.Select aria-label="Default select example">
                  <option>Select Employee ID</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </div>
              <div className="col-md-3">
              <Form className="d-flex">
                <div className="row">
                    <div className="col-md-2 mt-1">
                    <Form.Label className="text-center fw-bold">From</Form.Label>
                    </div>
                    <div className="col-md-10">
                    <Form.Control type="date" />
                    </div>
                </div>
              </Form>
              </div>
              <div className="col-md-3">
              <Form className="d-flex">
                <div className="row">
                    <div className="col-md-2 mt-1">
                    <Form.Label className="text-center fw-bold">To</Form.Label>
                    </div>
                    <div className="col-md-10">
                    <Form.Control type="date" />
                    </div>
                </div>
              </Form>
              </div>

              <div className="col-md-3">
                <Form className="d-flex">
                  <Button variant="success">Search</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4 ">
          <div className="col-md-12 ">
            <Table
              responsive
              striped
              bordered
              hover
              d-flex
              justify-content-center
            >
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Department</th>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Project Name</th>
                  <th>Work</th>
                  <th>Pendancy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Sale</td>
                  <td>Dipti</td>
                  <td>26/01/2024</td>
                  <td>10</td>
                  <td>HR Code</td>
                  <td>Make a Table</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Sale</td>
                  <td>Dipti</td>
                  <td>26/01/2024</td>
                  <td>10</td>
                  <td>HR Code</td>
                  <td>Make a Table</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Sale</td>
                  <td>Dipti</td>
                  <td>26/01/2024</td>
                  <td>10</td>
                  <td>HR Code</td>
                  <td>Make a Table</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Sale</td>
                  <td>Dipti</td>
                  <td>26/01/2024</td>
                  <td>10</td>
                  <td>HR Code</td>
                  <td>Make a Table</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Sale</td>
                  <td>Dipti</td>
                  <td>26/01/2024</td>
                  <td>10</td>
                  <td>HR Code</td>
                  <td>Make a Table</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
