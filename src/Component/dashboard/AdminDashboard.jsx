import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Dashboard.css"

export default function AdminDashboard() {
  return (
    <div>
      <div className="container mt-5">
      <div className="row">
          <div className="col-md-12">
            <h3 >Welcome Admin Dashboard !</h3>
          </div>
        </div>
        <hr />
       <div className="row mt-4">
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Total Employee <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Total Project <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>50</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Progress Project <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>15</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Completed Project <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>35</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Total Employee <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>500</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' style={{}}>Pending Project <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>25</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' >Task <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>120</span></Button>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
        <Button variant="primary" className='mb-5 card' >Client  <span className='p-2 mt-3'style={{"borderRadius":"5px","border":"1px solid black","backgroundColor":"#34d5eb"}}>500</span></Button>
        </div>
       
       </div>
      </div>
    </div>
  )
}
