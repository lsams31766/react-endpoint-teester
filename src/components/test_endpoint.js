import React, { Component }  from 'react'
import {Grid, Label, Dropdown, Checkbox, Segment, Button, Form, TextArea} from 'semantic-ui-react'
import endpoints from '../config/endpoints'


class TestEndPoint extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selected_env: null,
        selected_user: null,
        selected_appl: null,
        selected_service: null,
        selected_service_endpoint: null
      }
    }

    Envs = ['local','dev','qa','prod']
    Users = ['internal','external']
    Appl = ['baseball','disney','marvel','soccer','starwars','wwe']

    componentDidMount() {
        // load initial dropdown values
        const ep = endpoints.services
        const first_service = Object.keys(ep)[0]
        this.setState({
            selected_env: this.Envs[0],
            selected_user: this.Users[0],
            selected_appl: this.Appl[0],
            selected_service: first_service
        })
        // console.log('Questions componentDidMount() state',this.state)
    }
    
    get_service_endpoints = () => {
        //console.log('get_service_endpoints')
        const ep = endpoints.services
        const first_key = Object.keys(ep)[0]
        let current_service = ep[first_key];
        if (this.state.selected_service != null) {
            current_service = ep[this.state.selected_service]
        }
        const service_endpoints = current_service.map(item => {
            return {
                key: item,
                text: item,
                value: item,
                }
            })
        // set selected_service_endpoint
        if (this.state.selected_service_endpoint != current_service[0])
        {
            this.setState({
                selected_service_endpoint: current_service[0]
            })    
        }
        return service_endpoints
    }

    onDropdownChange = tags => (event,data) => {
        //console.log(tags)
        //console.log(data.value)
        if (tags == 'ENV') {
            this.setState({ selected_env: data.value })
        }
        if (tags == 'USER') {
            this.setState({ selected_user: data.value })
        }
        if (tags == 'APPL') {
            this.setState({ selected_appl: data.value })
        }
    }

    onServiceChange = (e, data) => {
        //console.log('onServiceChange')
        if (data == null) {
            return
        }
        // onsole.log(data.value)
        this.setState({ selected_service: data.value })
        this.get_service_endpoints()
    }

    onServiceEndpointChange = (e, data) => {
        // console.log('onServiceEndpointChange')
        if (data == null) {
            return
        }
        // console.log(data.value)
        this.setState({ selected_service_endpoint: data.value })
    }
  
    render() {
        // console.log('render')
        const { selected_service, selected_service_endpoint } = this.state
        const newLine = "\r\n";
        const text = '{' + newLine + '  "filter_fields":' + newLine +
        '    { "id": "abc" }' + newLine + '}'
    
        const EnvArray = this.Envs.map(envItem => {
            return {
                key: envItem,
                text: envItem,
                value: envItem,
            }          
        })
    
        const UsersArray = this.Users.map(envItem => {
            return {
                key: envItem,
                text: envItem,
                value: envItem,
            }          
        })
    
        
        const ApplArray = this.Appl.map(envItem => {
            return {
                key: envItem,
                text: envItem,
                value: envItem,
            }          
        })
    
    
        const s = Object.keys(endpoints.services)
        const services = s.map(item => {
            return {
                key: item,
                text: item,
                value: item,
            }          
        })
       
        // console.log('s',s)
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
                            <Dropdown className='small-list' 
                            placeholder='Env' 
                            selection options={EnvArray}
                            value={this.state.selected_env}
                            onChange = {this.onDropdownChange('ENV')} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='custom-no-padding'>
                        <Grid.Column>
                            <h4>User:</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown className = 'small-list' 
                            placeholder='User' 
                            selection options={UsersArray}
                            value={this.state.selected_user}
                            onChange = {this.onDropdownChange('USER')}  />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='custom-no-padding'>
                        <Grid.Column>
                            <h4>Application:</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown className = 'small-list' 
                            placeholder='Appl' 
                            selection options={ApplArray}
                            value={this.state.selected_appl}
                            onChange = {this.onDropdownChange('APPL')} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='custom-no-padding'>
                        <Grid.Column>
                            <h4>Service:</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown className = 'small-list' 
                            placeholder='Service' 
                            selection options={services}
                            value={this.state.selected_service}
                            onChange={this.onServiceChange} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='custom-no-padding'>
                        <Grid.Column>
                            <h4>Endpoints:</h4>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown className = 'small-list' 
                            placeholder='Env' 
                            value = {this.state.selected_service_endpoint}
                            selection options={this.get_service_endpoints()}
                            onChange = {this.onServiceEndpointChange}/>
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
}

export default TestEndPoint