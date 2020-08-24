import React from 'react'
import {Header, Segment} from 'semantic-ui-react'

const MyHeader = ({title,author}) => {
    return (
        <Segment basic inverted vertical>
            <Header textAlign='center' as='h1'>{title}</Header>
            <Header textAlign='center' as='h3'>Author: {author}</Header>
        </Segment>
    )
}

export default MyHeader