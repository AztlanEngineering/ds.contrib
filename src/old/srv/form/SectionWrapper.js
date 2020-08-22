import React from 'react'

import {
  Accordion
} from 'ui/common'

const SectionWrapper = (props) =>
  <Accordion.Item
    index={props.index}
  >
    <Accordion.Title
      index={props.index}
      labelColor={props.valid ? 'green' : 'orange'}
      disabled={props.disabled}
      id={ props.id }
    >
      { props.title }
    </Accordion.Title>

    <Accordion.Content>
      { props.children }
    </Accordion.Content>
  </Accordion.Item>

export default SectionWrapper
