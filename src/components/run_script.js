import React from 'react'
import {Grid, Label, Dropdown, Checkbox, Segment, Button} from 'semantic-ui-react'

/*
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})
*/

const testScripts = ['Script1.yaml','Script2.yaml','Script3.yaml']
const testScriptsArray = testScripts.map(scriptItem => {
    return {
        key: scriptItem,
        text: scriptItem,
        value: scriptItem,          
    }
})

const testEnvs = ['local','dev','qa','prod']
const testEnvArray = testEnvs.map(envItem => {
    return {
        key: envItem,
        text: envItem,
        value: envItem,          
    }
})

const RunScript = () => {
    return (
        <Segment>
        <Grid columns={1} padded>
            <Grid.Row centered>
                <h3>RUN SCRIPT</h3>
            </Grid.Row>
            <Grid.Row centered className='custom-no-padding'>
                <Dropdown className='small-list'
                    placeholder='Script' 
                    search 
                    selection 
                    options={testScriptsArray} 
                />
            </Grid.Row>
            <Grid.Row centered className='custom-no-padding'>
                <Dropdown className='small-list'
                    placeholder='Environment' 
                    search 
                    selection 
                    options={testEnvArray} 
                />
            </Grid.Row>
            <Grid.Row centered>
                <Checkbox className= 'checkboxStyle' label='Sequence Mode'/>
            </Grid.Row>
            <Grid.Row centered>
                <Button primary>GO</Button>
            </Grid.Row>
        </Grid>
        </Segment>
    )
}

export default RunScript