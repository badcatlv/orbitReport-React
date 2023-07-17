import satData from "./satData";


const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}:
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
//create 4 clickable buttons
//three will use the props you passed from the App() function
  //props ---> filterByType , setSat , displaySats
//the forth button will display ALL satellites
//The satellites render in the table based on a button click
//onClick ={Table for that orbit path button}
// When the project is complete, it will render 4 buttons.