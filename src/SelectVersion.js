import React, { Component } from 'react'
import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class SelectVersion extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const options = [
      { label: "Version 1", value: 1 },
      { label: "Version 2", value: 2 },
      { label: "Version 3", value: 3 }
    ]

    return (
      <VirtualizedSelect
        options={options}
        onChange={(selectValue) => this.setState({ selectValue })}
        value={this.state.selectValue}
        placeholder="Select Version"
      />
    )
  }
}

export default SelectVersion;