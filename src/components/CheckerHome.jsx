import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import CheckerTable from "./CheckerTable";

function CheckerHome() {
  const [loading, setLoading] = useState(true);
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    //call 1st REST API here and update instances state
    axios
      .get("http://localhost:8080/engine-rest/task?candidateGroup=CHECKER")
      .then((response) => {
        setInstances(response.data);
        console.log(instances);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{loading ? <Loader /> : <CheckerTable data={instances} />} </div>;
}

export default CheckerHome;
