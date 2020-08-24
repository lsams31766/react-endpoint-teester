import React from 'react'
import {Grid, Label, Dropdown, Checkbox, Segment, Button, Form, TextArea} from 'semantic-ui-react'

const newLine = "\r\n";
const text = '{' + newLine + '  "filter_fields":' + newLine +
  '    { "id": "abc" }' + newLine + '}'

const Envs = ['local','dev','qa','prod']
const EnvArray = Envs.map(envItem => {
    return {
        key: envItem,
        text: envItem,
        value: envItem,          
    }
})

const TestEndPoint = () => {
    return (
        <Segment>
            <Grid columns={1}>
                <Grid.Row centered>
                    <h3>TEST ENDPOINT</h3>
                </Grid.Row>
            </Grid>
            <Grid columns={2} verticalAlign='middle'>
                <Grid.Row className='custom-no-padding'>
                    <Grid.Column>
                        <h4>Environment:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className='small-list' placeholder='Env' selection options={EnvArray} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='custom-no-padding'>
                    <Grid.Column>
                        <h4>User:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className = 'small-list' placeholder='Env' selection options={EnvArray} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='custom-no-padding'>
                    <Grid.Column>
                        <h4>Application:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className = 'small-list' placeholder='Env' selection options={EnvArray} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='custom-no-padding'> 
                    <Grid.Column>
                        <h4>Service:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className = 'small-list' placeholder='Env' selection options={EnvArray} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='custom-no-padding'>
                    <Grid.Column>
                        <h4>Endpoints:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className = 'small-list' placeholder='Env' selection options={EnvArray} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Form>
                <TextArea value={text} className='padded-textarea' rows={10} placeholder='Config here'>
                </TextArea>
            </Form>
            <Grid columns={1}>
                <Grid.Row centered>
                    <Button primary>SEND</Button>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}

export default TestEndPoint