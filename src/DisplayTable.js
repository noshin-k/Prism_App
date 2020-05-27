import React from "react";
import { Column, Table, AutoSizer } from "react-virtualized";
import "./index.css";
import "react-virtualized/styles.css";
import _ from "lodash";

class DisplayTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const list = [
        {name: 'Table 1', version: 'Version 1', schema: 'SWH'},
        {name: 'Table 2', version: 'Version 2', schema: 'SWH'},
      ];

    return (
    <Table
        width={300}
        height={400}
        headerHeight={20}
        rowHeight={30}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}>
        <Column label="Table Name" dataKey="name" width={200} />
        <Column width={300} label="Version" dataKey="version" />
        <Column width={300} label="Schema" dataKey="schema" />
    </Table>
    );
  }

}

export default DisplayTable;
