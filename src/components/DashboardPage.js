import React from 'react';
import Header from './Header';
import List from './List';
import Form from './Form';

class DashboardPage extends React.Component {
  state = {
    items: []
  };

  handleUpdate = (item) => {
    this.setState(() => ({
      items: this.state.items.concat(item)
    }));
  };

  handleRemove = (item) => {
    this.setState(() => ({
      items: this.state.items.filter((items) => item !== items)
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <List items={this.state.items} handleRemove={this.handleRemove}/>
        <Form handleUpdate={this.handleUpdate} />
      </div>
    )
  }
};

export default DashboardPage;
