import React, { useState, useEffect } from "react";
// import axios from "axios";
import Loader from "./Loader";
import Table from "./Table";
function Home() {
  const [loading, setLoading] = useState(true);
  const [instances, setInstances] = useState([
    {
      id: "003e69a6-b94e-11eb-8d0a-5800e3cfca751",
      definitionId: "CCMS:7:89f8ff83-b8aa-11eb-92f3-5800e3cfca75",
    },
    {
      id: "003e69a6-b94e-11eb-8d0a-5800e3cfca752",
      definitionId: "CCMS1:7:89f8ff83-b8aa-11eb-92f3-5800e3cfca75",
    },
  ]);

  useEffect(() => {
    //call 1st REST API here and update instances state
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Loader /> : <Table data={instances} />} </div>;
}

export default Home;
