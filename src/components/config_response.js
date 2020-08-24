import React from 'react'
import {Segment, Form, TextArea, Label} from 'semantic-ui-react'

const newLine = "\r\n";
const text = '{' + newLine + '  "filter_fields":' + newLine +
  '    { "id": "abc" }' + newLine + '}'

const ConfigResponse = () => {
    return (
        <Segment>
        <Form>
            <Label size='large'>Config</Label>
            <TextArea value={text} rows={10} placeholder='Config here'>
            </TextArea>
            <Label size='large'>Response</Label>
            <TextArea  value={text} rows={10} placeholder='Response here'>
            </TextArea>
        </Form>
        </Segment>
    )
}

export default ConfigResponse
