import React from "react";
import Navbar from "./Navbar";
import Mainbar from "./mainbar/Mainbar";

function Home({ Component }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <Navbar className="" />
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-none p-0"  >
            <Mainbar/>
          </div>
          <div className="col-lg-10 col-sm-12" style={{"backgroundColor":"#e9e4da"}}>{Component && <Component />}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
