import "./styling.css"

const Table = ({ sat }) => {
  return (
    //use map() to render data based on user selected orbit type
    //map thru the sat property using id and data as callbacks
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type of Satellite
          </th>
          <th>
            Launch Date
          </th>
          <th>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {sat.map(data => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational === true ? "Active" : "Inactive"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
//create a table that show the following data
    //Name
    //Type of Satellite
    //Launch Date
    //Status
//expand the table so that it displays the required data for each satellite