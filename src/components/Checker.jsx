import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Checker(props) {
  return (
    <>
      <h1 className='text-center'>Checker screen</h1>
      <div className='d-md-flex h-md-100 align-items-center text-center'>
        {/* First Half  */}

        <div className='col-md-6 p-0 bg-indigo h-md-100 leftside text-center'>
          <div className='text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center subleftside '>
            <div className='logoarea pt-5 pb-5 mr-5 pr-5 text-center bg-white rounded'>
              <div className='form-group row pb-lg-3'>
                <label htmlFor='Name' className='col-sm-2 col-form-label'>
                  Name
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    disabled
                  />
                </div>
              </div>
              <div className='form-group row pb-lg-3'>
                <label htmlFor='inputAge' className='col-sm-2 col-form-label'>
                  Age
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='age'
                    disabled
                  />{" "}
                </div>
              </div>
              <div className='form-group row pb-lg-3'>
                <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
                  Email
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row pb-lg-3'>
                <label
                  htmlFor='inputCourtid'
                  className='col-sm-2 col-form-label'>
                  Court ID
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='courtid'
                    disabled
                  />
                </div>
              </div>
              <div className='form-group row text-center pb-lg-3'>
                <label
                  htmlFor='inputAdhaar'
                  className='col-sm-2 col-form-label'>
                  Adhaar No
                </label>
                <div className='col-sm-10 text-center'>
                  <input
                    type='text'
                    className='form-control'
                    id='adhaarno'
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row text-center pb-lg-3'>
                <label
                  htmlFor='inputComment'
                  className='col-sm-2 col-form-label'>
                  Comment
                </label>
                <div className='col-sm-10 text-center'>
                  <input
                    type='text'
                    className='form-control'
                    id='comment'
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Half */}

        <div className='col-md-6 p-0 bg-indigo h-md-100 leftside text-center'>
          <div className='text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center subleftside '>
            <div className='logoarea pt-5 pb-5 mr-5 pr-5 text-center bg-white rounded'>
              <button className='btn btn-primary '>Search</button>
              <div className='form-group row pt-lg-5'>
                <div className='form-group row text-center pt-5'>
                  <label
                    htmlFor='inputComment'
                    className='col-sm-2 col-form-label'>
                    Email comment
                  </label>
                  <div className='col-sm-10 text-center'>
                    <textarea
                      type='text'
                      className='form-control'
                      id='markercomment'
                      style={{ height: "90px", width: "100%" }}
                      placeholder='Add marker comment'
                      disabled
                    />
                  </div>
                </div>
              </div>
              {/* Radio  button */}
              <div className='pt-4'>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline1'
                    name='customerRadio'
                    className='custom-control-input'
                    disabled
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customRadioInline1'>
                    Customer
                  </label>
                </div>
                <div className='custom-control custom-radio custom-control-inline'>
                  <input
                    type='radio'
                    id='customRadioInline2'
                    name='customerRadio'
                    className='custom-control-input'
                    disabled
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customRadioInline2'>
                    Non Customer
                  </label>
                </div>
              </div>

              {/* submit button */}

              <div className='pt-lg-5 ml-lg-5 pl-5'>
                <div
                  className=' custom-control-inline'
                  style={{ width: "45%" }}>
                  <button to='/' className='btn btn-primary'>
                    Submit
                  </button>
                </div>
                <div
                  className='custom-control-inline'
                  style={{ width: "45%", backgroundColor: "" }}>
                  <Link to='/maker' className='btn btn-primary'>
                    Go back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checker;
