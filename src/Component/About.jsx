import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function About() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-12 ">
          <Table responsive striped  hover >
      <thead >
        <tr variant="dark">
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
          </div>
        </div>

     
      </div>
    </div>
  );
}
