import React, { Component } from "react";

export default class Items extends Component {
  render() {
    const mystyle = {
      height: "100%",
      width: "100%",
    };
    return (
      <>
        <div className="container px-lg-5">
          <div className="row mt-4 mb-4">
            <div className="col-lg-3">
              <div className="card bg-light border-0 h-100">
                <img
                  src="https://pluspng.com/img-png/bootstrap-logo-png--600.png"
                  style={mystyle}
                  alt="Bootstrap Logo"
                />
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Card title</h2>
                  <p className="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a class="btn btn-primary btn-lg mt-4" href="#!">Find out more!</a>
                </div>
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 h-100">
                <img
                  src="https://pluspng.com/img-png/bootstrap-logo-png--600.png"
                  style={mystyle}
                  alt="Bootstrap Logo"
                />
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Card title</h2>
                  <p className="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a class="btn btn-primary btn-lg mt-4" href="#!">Find out more!</a>
                </div>
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 h-100">
                <img
                  src="https://pluspng.com/img-png/bootstrap-logo-png--600.png"
                  style={mystyle}
                  alt="Bootstrap Logo"
                />
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Card title</h2>
                  <p className="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a class="btn btn-primary btn-lg mt-4" href="#!">Find out more!</a>
                </div>
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 h-100">
                <img
                  src="https://pluspng.com/img-png/bootstrap-logo-png--600.png"
                  style={mystyle}
                  alt="Bootstrap Logo"
                />
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Card title</h2>
                  <p className="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a class="btn btn-primary btn-lg mt-4" href="#!">Find out more!</a>
                </div>
                
              </div>
            </div>
            {/* Repeat the above structure for other columns */}
          </div>
          
        </div>
      </>
    );
  }
}
