import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Dashboard.css"

export default function EmployeeDashboard() {
  return (
    <div>
      <div className="container mt-5">
      <div className="row">
          <div className="col-md-12">
            <h3>Welcome Employee Dashboard !</h3>
          </div>
        </div>
        <hr />
       <div className="row mt-4">
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Leave <span>50</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' style={{}}>Total Employee <span>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='pt-4 mb-5 card' > tottal <span>500</span></Button>
        </div>
       
       </div>
      </div>
    </div>
  )
}
