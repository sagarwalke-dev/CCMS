import React, { createContext, useState } from "react";
import "./css/table.css";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router";
import axios from "axios";

const User = createContext();
function CheckerTable(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  /**Get instance details based on id */
  let getInstanceInfo = async (e) => {
    let instanceId = e.target.value;
    const url = `http://localhost:8080/engine-rest/task?processInstanceId=${instanceId}`;

    let response = await axios.get(url);
    if (response) {
      //   //get task Id and pass the task id here
      history.push({
        pathname: "/checker",
        state: { taskId: response.data[0].id, instanceId: instanceId },
      });
    } else {
      console.log("Failed to get Task Id");
    }
  };

  return (
    <>
      <div className="pt-5">
        <table></table>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Instance ID</th>
              <th scope="col">Definition ID</th>
              <th scope="col text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.processInstanceId}>
                <td>{item.processInstanceId}</td>
                <td>{item.processDefinitionId.slice(0, 4)}</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    style={{ width: "100%" }}
                    value={item.processInstanceId}
                    onClick={getInstanceInfo}
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CheckerTable;
export { User };
