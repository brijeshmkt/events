import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
        this.props.createEvent(this.state);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render() {
        
        const {cancelFormOpen} = this.props;
        const { title, date, city, venue, hostedBy } = this.state;
        
        return (
            
        <Segment>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                    <label>Event Title</label>
                    <input 
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Event Title"/>
                    
                </Form.Field>
                
                <Form.Field>
                    <label>Event Date</label>
                    <input name="date" 
                    value={date}
                    onChange={this.handleChange.bind(this)}
                    type="date" placeholder="date"/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name='city' 
                    value={city}
                    onChange={this.handleChange.bind(this)}
                    placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input name='venue' 
                    value={venue}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <label>Hosted By</label>
                    <input name='hostedBy' 
                    value={hostedBy}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Hosted By"/>
                </Form.Field>
                <Button positive type="submit">Submit</Button>
                <Button onClick={cancelFormOpen} type="button">Cancel</Button>
            </Form>
        </Segment>
       
        );
    }
}
