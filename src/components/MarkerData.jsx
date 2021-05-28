import React, { useState } from "react";
import "./css/maker.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
function MakerData(props) {
  const [customer, setCustomer] = useState();
  const [makerComment, setMakerComment] = useState();
  const [customerStatus, setCustomerStatus] = useState();
  const [taskId, setTaskId] = useState();
  let Task;
  let search = async () => {
    //dummy data for api call

    let dummyData = {};
    //make submit call
    await axios
      .post(
        `http://localhost:8080/engine-rest/task/${props.taskId}/submit-form`,
        dummyData,
      )
      .then(async (response) => {
        if (response.status === 204) {
          //get new task id using instance id
          Task = await axios.get(
            `http://localhost:8080/engine-rest/task?processInstanceId=${props.instanceId}`,
          );

          setTaskId(Task.data[0].id);
          let Variables = await axios.get(
            `http://localhost:8080/engine-rest/task/${Task.data[0].id}/variables`,
          );

          setCustomer(Variables.data.yes.value);
        } else {
          console.log("ERR: inside else");
          alert("You already submited form");
        }
      });

    // console.log(response);
    //
    // } else alert("You have alredy submitted form");
  };

  let getComment = (e) => {
    setMakerComment(e.target.value);
  };
  let getStatus = (e) => {
    if (e.target.value != "true") setCustomerStatus(false);
    else setCustomerStatus(true);
  };

  //submit maker data
  let submitMaker = async () => {
    var data = {
      variables: {
        coustmer: {
          value: customerStatus,
          type: "Boolean",
        },
        makerComment: {
          value: makerComment,
          type: "String",
        },
      },
    };

    axios
      .post(`http://localhost:8080/engine-rest/task/${taskId}/complete`, data)
      .then((res) => {
        console.log("RES: " + res);
      })
      .catch((err) => {
        console.log("ERR ::" + err);
      });
  };
  return (
    <>
      <h1 className="text-center">Maker screen</h1>
      <div className="d-md-flex h-md-100 align-items-center text-center">
        {/* First Half  */}

        <div className="col-md-6 p-0 bg-indigo h-md-100 leftside text-center">
          <div className="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center subleftside ">
            <div className="logoarea pt-5 pb-5 mr-5 pr-5 text-center bg-white rounded">
              <div className="form-group row pb-lg-3">
                <label htmlFor="Name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={props.data.name.value}
                  />
                </div>
              </div>
              <div className="form-group row pb-lg-3">
                <label htmlFor="inputAge" className="col-sm-2 col-form-label">
                  Age
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    value={props.data.age.value}
                  />
                </div>
              </div>
              <div className="form-group row pb-lg-3">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={props.data.email.value}
                  />
                </div>
              </div>

              <div className="form-group row pb-lg-3">
                <label
                  htmlFor="inputCourtid"
                  className="col-sm-2 col-form-label"
                >
                  Court ID
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="courtid"
                    value={props.data.courtid.value}
                  />
                </div>
              </div>
              <div className="form-group row text-center pb-lg-3">
                <label
                  htmlFor="inputAdhaar"
                  className="col-sm-2 col-form-label"
                >
                  Adhaar No
                </label>
                <div className="col-sm-10 text-center">
                  <input
                    type="text"
                    className="form-control"
                    id="adhaarno"
                    value={props.data.adharno.value}
                  />
                </div>
              </div>

              <div className="form-group row text-center pb-lg-3">
                <label
                  htmlFor="inputComment"
                  className="col-sm-2 col-form-label"
                >
                  Is customer?
                </label>
                <div className="col-sm-10 text-center">
                  <input
                    type="text"
                    className="form-control"
                    id="comment"
                    value={customer}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Half */}

        <div className="col-md-6 p-0 bg-indigo h-md-100 leftside text-center">
          <div className="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center subleftside ">
            <div className="logoarea pt-5 pb-5 mr-5 pr-5 text-center bg-white rounded">
              <button className="btn btn-primary " onClick={search}>
                Search
              </button>
              <div className="form-group row pt-lg-5">
                <div className="form-group row text-center pt-5">
                  <label
                    htmlFor="inputComment"
                    className="col-sm-2 col-form-label"
                  >
                    Email comment
                  </label>
                  <div className="col-sm-10 text-center">
                    <textarea
                      type="text"
                      className="form-control"
                      id="markercomment"
                      name="makerComment"
                      style={{ height: "90px", width: "100%" }}
                      placeholder="Add marker comment"
                      onChange={getComment}
                    />
                  </div>
                </div>
              </div>
              {/* Radio  button */}
              <div className="pt-4">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customerRadio"
                    className="custom-control-input"
                    value="true"
                    onChange={getStatus}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Customer
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customerRadio"
                    className="custom-control-input"
                    value="false"
                    onChange={getStatus}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Non Customer
                  </label>
                </div>
              </div>

              {/* submit button */}

              <div className="pt-lg-5 ml-lg-5 pl-5">
                <div
                  className=" custom-control-inline"
                  style={{ width: "45%" }}
                >
                  <Link
                    to="/checkerHome"
                    className="btn btn-primary"
                    onClick={submitMaker}
                  >
                    Submit
                  </Link>
                </div>
                <div
                  className="custom-control-inline"
                  style={{ width: "45%", backgroundColor: "" }}
                >
                  <Link to="/" className="btn btn-primary">
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
export default MakerData;
