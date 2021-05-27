import React from "react";

function Test() {
  return (
    <>
      <div class='form-group row'>
        <label for='Name' class='col-sm-2 col-form-label'>
          Name
        </label>
        <div class='col-sm-5'>
          <input
            type='text'
            readonly
            class='form-control-plaintext'
            id='name'
            value='email@example.com'
          />
        </div>
      </div>
      <div class='form-group row'>
        <label for='inputAge' class='col-sm-2 col-form-label'>
          Age
        </label>
        <div class='col-sm-5'>
          <input
            type='text'
            class='form-control-plaintext'
            id='age'
            value='23'
            readonly
          />
        </div>
      </div>
      <div class='form-group row'>
        <label for='inputEmail' class='col-sm-2 col-form-label'>
          Email
        </label>
        <div class='col-sm-5'>
          <input
            type='text'
            class='form-control-plaintext'
            id='email'
            value='sample@gmail.com'
            readonly
          />
        </div>
      </div>

      <div class='form-group row'>
        <label for='inputCourtid' class='col-sm-2 col-form-label'>
          Court ID
        </label>
        <div class='col-sm-5'>
          <input
            type='text'
            class='form-control-plaintext'
            id='courtid'
            value='ADG394384'
            readonly
          />
        </div>
      </div>
      <div class='form-group row'>
        <label for='inputAdhaar' class='col-sm-2 col-form-label'>
          Adhaar No
        </label>
        <div class='col-sm-5'>
          <input
            type='text'
            class='form-control-plaintext'
            id='adhaarno'
            value='934839483948394'
            readonly
          />
        </div>
      </div>
    </>
  );
}

export default Test;
