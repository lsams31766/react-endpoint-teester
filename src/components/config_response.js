import React from 'react'
import {Segment, Form, TextArea, Label, Grid} from 'semantic-ui-react'

const newLine = "\r\n";
const text = '{' + newLine + '  "filter_fields":' + newLine +
  '    { "id": "abc" }' + newLine + '}'

const ConfigResponse = () => {
    return (
        <Segment>
        <Form>
            <Grid columns={1}>
                <Grid.Row centered>
                    <h3 size='large'>Config</h3>
                </Grid.Row>
            </Grid>
            <TextArea value={text} rows={10} placeholder='Config here'>
            </TextArea>
            <Grid columns={1}>
                <Grid.Row centered>
                    <h3 size='large'>Response</h3>
                </Grid.Row>
            </Grid>
            <TextArea  value={text} rows={10} placeholder='Response here'>
            </TextArea>
        </Form>
        </Segment>
    )
}

export default ConfigResponse
