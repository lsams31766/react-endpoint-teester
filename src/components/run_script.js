import React, { Component } from 'react'
import {Grid, Label, Dropdown, Checkbox, Segment, Button} from 'semantic-ui-react'
import listReactFiles from 'list-react-files'
/*
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})
*/

class RunScript extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_script: null,
            selected_env: null
        }
    }

testScripts = ['Script1.yaml','Script2.yaml','Script3.yaml']
testScriptsArray = this.testScripts.map(scriptItem => {
    return {
        key: scriptItem,
        text: scriptItem,
        value: scriptItem,          
    }
})

    testEnvs = ['local','dev','qa','prod']
    testEnvArray = this.testEnvs.map(envItem => {
        return {
            key: envItem,
            text: envItem,
            value: envItem,          
        }
    })

    componentDidMount() {
        this.setState({ 
            selected_script: this.testScripts[0],
            selected_env: this.testEnvs[0]
        })
    }

    onDropdownChange = tags => (event,data) => {
        if (tags == 'SCR') {
            this.setState({ selected_script: data.value })
        }
        if (tags == 'ENV') {
            this.setState({ selected_env: data.value })
        }
    }

    render() {
        return (
            <Segment>
            <Grid columns={1} padded>
                <Grid.Row centered>
                    <h3>RUN SCRIPT</h3>
                </Grid.Row>
            </Grid>
            <Grid columns={2} verticalAlign='middle'>
                <Grid.Row centered className='custom-no-padding'>
                    <Grid.Column>
                        <h4>Script:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className='small-list'
                            placeholder='Script'  
                            selection options={this.testScriptsArray}
                            value = {this.state.selected_script}
                            onChange = {this.onDropdownChange('SCR')} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered className='custom-no-padding'>
                    <Grid.Column>
                            <h4>Environment:</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown className='small-list'
                            placeholder='Environment' 
                            selection options={this.testEnvArray}
                            value = {this.state.selected_env}
                            onChange = {this.onDropdownChange('ENV')} 
                        />
                    </Grid.Column>
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
}

export default RunScript