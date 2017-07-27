import React from 'react';
import '../styles/App.css';
import BaseLayout from './Layout.js'
import Appetizers from './Appetizers.js'
import Entrees from './Entrees.js'
import Desserts from './Desserts.js'
// Import BaseLayout, Appetizers, Entrees, Desserts


export default class App extends React.Component {
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.
  constructor(props){
    super(props);
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    };
  }
// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entrees, and desserts.
// Set these to state.
// YOUR CODE HERE>
  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
      .then(results => results.json())
      .then(([data]) => {
        this.setState({appetizers: data.Appetizers, entrees: data.Entrees, desserts: data.Desserts});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
  }

  render() {
    const {appetizers, entrees, desserts} = this.state;
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <BaseLayout>
        <h1>This is the Body!</h1>
        <Appetizers items={appetizers}/>
        <Entrees items={entrees}/>
        <Desserts items={desserts}/>
      </BaseLayout>
    );
  }
}
