import React, { Component } from 'react'
import { Segment, Grid, Header, Form, Field, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    render() {
        
        const {cancelFormOpen} = this.props;
        
        return (
            
        <Segment>
            <Form>
                <Form.Field>
                    <label>Event Title</label>
                    <input placeholder="First name"/>
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input type="date" placeholder="First name"/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input type="date" placeholder="First name"/>
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input type="date" placeholder="First name"/>
                </Form.Field>
                <Form.Field>
                    <label>Hosted By</label>
                    <input type="date" placeholder="First name"/>
                </Form.Field>
                <Button positive type="submit">Submit</Button>
                <Button onClick={cancelFormOpen} type="button">Cancel</Button>
            </Form>
        </Segment>
       
        );
    }
}
