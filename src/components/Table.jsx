import React, { createContext } from "react";
import "./css/table.css";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router";

const User = createContext();
function Table(props) {
  const history = useHistory();

  /**Get instance details based on id */
  let getInstanceInfo = (e) => {
    let instanceId = e.target.value;
    const url = `http://localhost:8080/engine-rest/task?processInstanceId=${instanceId}`;
    console.log(url);

    // history.push("/marker");
    //call 2nd REST API here

    //get task Id and pass the task id here
    history.push({
      pathname: "/marker",
      state: { taskId: "my task id" },
    });
  };

  return (
    <>
      <div className='pt-5'>
        <table></table>
        <table className='table text-center'>
          <thead>
            <tr>
              <th scope='col'>Instance ID</th>
              <th scope='col'>Definition ID</th>
              <th scope='col text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.definitionId.slice(0, 4)}</td>
                <td>
                  <button
                    type='submit'
                    className='btn btn-primary mb-2'
                    style={{ width: "100%" }}
                    value={item.id}
                    onClick={getInstanceInfo}>
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

export default Table;
export { User };
