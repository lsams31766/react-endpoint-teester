import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import _ from 'lodash'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleSelection = () => (
  <Dropdown
  placeholder='Compact'
  selection
  options={getOptions(3, '')}
  />
)

export default DropdownExampleSelection
