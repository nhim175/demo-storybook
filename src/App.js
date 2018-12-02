import React, { Component } from 'react';
import WeeklySongListItem from './components/WeeklySongListItem';

class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000} />
    </div>;
  }
}

export default App;
