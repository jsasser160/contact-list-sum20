import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '555-555-5555' },
    { id: 1, firstName: 'Sally', phone: '555-555-5555' },
    { id: 1, firstName: 'Alex', phone: '555-555-5555' },
  ] }

  render() {
    return(
      <div>
        <Header size="huge" color='blue' textAlign='center'>
          Contact List
        </Header>
      </div>
    )
  }
}

export default App;
