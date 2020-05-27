import React from "react";
import ReactDOM from "react-dom";
import { Column, Table, SortDirection, AutoSizer } from "react-virtualized";
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
      <div style={{ height: 400 }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={30}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
            >
              <Column label="Table Name" dataKey="name" width={200} />
              <Column width={300} label="Version" dataKey="version" />
              <Column width={300} label="Schema" dataKey="schema" />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

}

export default DisplayTable;
