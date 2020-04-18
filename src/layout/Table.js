import React, { Component } from 'react';

class Table extends Component {

  render() {
    return (
<div>
    <table width="100%" border="1">
        <tbody>
            <tr>
                <td width="5%">Client Id</td>
                <td width="25%">Client Name</td>
                <td width="70%">Client Description</td>
            </tr>
           {this.props.rows.map(row => (
             <tr key={row.id}>
                 <td>{row.id}</td>
                 <td>{row.cname}</td>
                 <td>{row.cdescr}</td>
             </tr>
            ))}
        </tbody>
    </table>
</div>
    );
  }

}

export default Table;