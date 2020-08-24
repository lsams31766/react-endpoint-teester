import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const newLine = "\r\n";
const text = '{' + newLine + '  "filter_fields":' + newLine +
  '    { "id": "abc" }' + newLine + '}'

const TextAreaExampleTextArea = () => (
  <Form className= 'textArea'>
    <TextArea   rows={10} placeholder='Config here'>
      {text}
      </TextArea>
  </Form>
)

export default TextAreaExampleTextArea