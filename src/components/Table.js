const Table = ({ sat }) => {
  return (
    //use map() to render data based on user selected orbit type
    //map thru the sat property using id and data as callbacks
      <table>
       <thead>
        <tr>
          <th>Header TBD</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Row Data TBD</td>
        </tr>
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