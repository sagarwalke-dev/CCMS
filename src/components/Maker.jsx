import React, { useEffect, useState } from "react";

import axios from "axios";
import MakerData from "./MarkerData";
import Loader from "./Loader";

function Maker(props) {
  const taskId = props.location.state.taskId;
  const instanceId = props.location.state.instanceId;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //call 3rd API with the help of taks id with onload
  let getVaribales = () => {
    let response = axios.get(
      `http://localhost:8080/engine-rest/task/${taskId}/variables`,
    );
    response
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
    await getVaribales();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <MakerData data={data} taskId={taskId} instanceId={instanceId} />
      )}{" "}
    </div>
  );
}

//print

export default Maker;
