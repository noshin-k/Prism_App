import React, { Component } from 'react'
import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class SelectTable extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const options = [
      { label: "Table 1", value: 1 },
      { label: "Table 2", value: 2 },
      { label: "Table 3", value: 3 },
      { label: "Table 4", value: 4 },
      { label: "Table 5", value: 5 },
      { label: "Table 6", value: 6 },
      { label: "Table 7", value: 7 },
      { label: "Table 8", value: 8 },
      { label: "Table 9", value: 9 },
    ]

    return (
      <VirtualizedSelect
        options={options}
        onChange={(selectValue) => this.setState({ selectValue })}
        value={this.state.selectValue}
        placeholder="Select Table"
      />
    )
  }
}

export default SelectTable;