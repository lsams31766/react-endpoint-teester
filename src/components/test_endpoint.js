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
        selected_service_endpoint: null,
        current_body: ''
      }
    }

    // Move this to utilty.js when that is created
    format_json = (cur_body) => {
        try {
        const json_body = JSON.parse(cur_body)
        const json_formatted = JSON.stringify(json_body, null, 4)
        let Error = false
        let Value = null
        return {Error: false, Value:json_formatted}
        } catch (error) {
            console.log('ERROR format_json',error)
            return {Error: true, Value: 'JSON Format Error'}
        }
    }

    Envs = ['local','dev','qa','prod']
    Users = ['internal','external']
    Appl = ['baseball','disney','marvel','soccer','starwars','wwe']

    componentDidMount() {
        // load initial dropdown values
        const ep = endpoints.services
        const first_service = Object.keys(ep)[0]
        const bodys = endpoints.bodys
        const first_body = Object.values(bodys)[0]
        let ret = this.format_json(first_body)
        this.setState({
            selected_env: this.Envs[0],
            selected_user: this.Users[0],
            selected_appl: this.Appl[0],
            selected_service: first_service,
            selected_service_endpoint: ep[first_service][0],
            current_body: ret.Value
        })

        // console.log('Questions componentDidMount() state',this.state)
    }
    
    update_current_service_endpoint = (service, isNewService) => {
        // set selected_service_endpoint
        const ep = endpoints.services
        let current_service = ep[service]
        if (isNewService)
        {
            this.setState({
                selected_service_endpoint: current_service[0]
            })    
        } 
    }

    get_service_endpoints = () => {
        //console.log('get_service_endpoints')
        const ep = endpoints.services
        let current_service = null;
        if (this.state.selected_service == null) {
            current_service = ep[Object.keys(ep)[0]]
        }
        else {
            current_service = ep[this.state.selected_service]
        }
        const service_endpoints = current_service.map(item => {
            return {
                key: item,
                text: item,
                value: item,
                }
            })
        return service_endpoints
    }

    update_body = () => {
        const bodys = endpoints.bodys
        const cur_body = bodys[this.state.selected_service_endpoint]
        const ret = this.format_json(cur_body)
        if (ret.Error == false) {
            this.setState({ current_body: ret.Value})
        } 
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
        if (tags == 'SRV') {
            this.setState({ selected_service: data.value }, () => {
                this.update_body() // assure this happens after state change
            })
            this.get_service_endpoints()
            this.update_current_service_endpoint(data.value, true)    
        }
        if (tags == 'SRV_EP') {
            this.setState({ selected_service_endpoint: data.value }, () => {
                this.update_body() // assure this happens after state change
            })
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
        // set the body
      //  const bodys = endpoints.bodys
      //  const cur_body = bodys[this.state.selected_service_endpoint]
      //  this.setState({ current_body: cur_body})
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
                            onChange = {this.onDropdownChange('SRV')} />
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
                            onChange = {this.onDropdownChange('SRV_EP')}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Form>
                    <TextArea value={this.state.current_body} 
                        className='padded-textarea' rows={10} placeholder='Config here'>
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