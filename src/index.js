import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Functino Based Component
//
// const App = () => {
//   // get the current location of the user
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );

//   return <div>Latitude: </div>;
// };

// Class based Component
//
class App extends React.Component {
  // initailizing the state for the component using constructor if any initial value is required
  // constructor(props) {
  //   // define super()
  //   super(props);

  //   // initializing the property of interest (lat in this case)
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // refactoring states without constructor
  state = { lat: null, errorMessage: "" };

  // componentDidMount
  componentDidMount() {
    console.log("Component was mounted and rendered");
    // Geolocation
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // set State called !!!!!
        this.setState({ lat: position.coords.latitude });
      },
      //if location is denied
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // componentDidUpdate
  componentDidUpdate() {
    console.log("Component was rendered");
  }

  //Render Helper ---> if multiple conditional statement for rendering
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <div>
        <Spinner message="Please allow location permisson" />
      </div>
    );
  }

  // Class component must always have a render()
  render() {
    //Geberal Return
    // return (
    //   <div>
    //     Latitude: {this.state.lat}
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // );

    // Conditional Rendering part 1

    return <div className=" ui ">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
