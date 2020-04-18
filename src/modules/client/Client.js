import React, { Component } from 'react';
import Table from '../../layout/Table';

class Client extends Component {

  constructor(props) {
    super(props);
    this.state= { list: [] };
  }

  listClients() {    
    fetch('http://jenkins.aurumsys.com:8087/clients',
    {
       method: "GET",
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       }
    }).then(response => {
      return response.json();
    }).then(data => {
        this.setState({
          list: data          
        });
    }).catch(error => {
        this.setState({
          list: []
        });
    })
  }

  componentDidMount() {
    this.listClients();
  }

  render() {
    if (this.state.list.length===0) {
      return (
        <div id="client" className="container">
          <h3>Client Information</h3>
          <h5>Make sure noobspringbootapp container is started.</h5>
        </div>
      );  
    } else {
      return (
        <div id="client" className="container">
          <h3>Client Information</h3>
          <h5>From http://jenkins.aurumsys.com:8087/clients (noobspringbootapp).</h5>
          <Table rows={this.state.list} />
        </div>
      );  
    }
  }

}

export default Client;