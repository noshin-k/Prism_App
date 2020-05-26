import React, { Component } from 'react'
import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class SelectSchema extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const options = [
      { label: "SWH", value: 1 },
      { label: "Default", value: 2 },
    ]

    return (
      <VirtualizedSelect
        options={options}
        onChange={(selectValue) => this.setState({ selectValue })}
        value={this.state.selectValue}
        placeholder="Select Schema"
      />
    )
  }
}

export default SelectSchema;