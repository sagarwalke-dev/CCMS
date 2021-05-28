import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

import MakerTable from "./MakerTable";
function MakerHome() {
  const [loading, setLoading] = useState(true);
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    //call 1st REST API here and update instances state
    axios
      .get("http://localhost:8080/engine-rest/task?candidateGroup=MAKER")
      .then((response) => {
        setInstances(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{loading ? <Loader /> : <MakerTable data={instances} />} </div>;
}

export default MakerHome;
