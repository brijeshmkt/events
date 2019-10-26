import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid';

const events =  [
    {
      id: "1",
      title: "Trip to Empire State building",
      date: "2018-03-21",
      category: "culture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "NY, USA",
      venue: "Empire State Building, 5th Avenue, New York, NY, USA",
      venueLatLng: {
        lat: 40.7484405,
        lng: -73.98566440000002
      },
      hostedBy: "Bob",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      attendees: [
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]
    },
    {
      id: "2",
      title: "Trip to Punch and Judy Pub",
      date: "2018-03-18",
      category: "drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Punch & Judy, Henrietta Street, London, UK",
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
      hostedBy: "Tom",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      attendees: [
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]
    }
  ];

class EventDashboard extends Component {
    state = {
        events: events,
        isOpen: false,
        selectedEvent: null
    }

    handleSelectEvent = (event) => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }
    handleFormCancel = () => {
        this.setState({
            isOpen: false
        })
    }
    
    handleUpdateEvent = (updatedEvent) => {
        this.setState( ({events}) => ({
            events: events.map(event => {
                if(event.id === updatedEvent.id) {
                    return {...updatedEvent}
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null
        }) )
    }
    handleDeleteEvent = (id) => {
        this.setState( ({events}) => ({
            events: events.filter(e => e.id !== id)
        }) )
    }

    // handleIsOpenToggle = () => {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen
    //     }))
    // }

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';

        this.setState(({events}) => ({
            events: [...events, newEvent],
            isOpen: false
        }));
    }
    render() {
        const { events, isOpen, selectedEvent } = this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} 
                        deleteEvent={this.handleDeleteEvent}
                        selectEvent={this.handleSelectEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button 
                        onClick={this.handleCreateFormOpen} 
                        positive content="Create Event" 
                    />
                    {isOpen && 
                    <EventForm 
                        updateEvent={this.handleUpdateEvent}
                        key={selectedEvent ? selectedEvent.id : 0}
                        selectedEvent={selectedEvent}
                        createEvent={this.handleCreateEvent} 
                        cancelFormOpen={this.handleFormCancel} />}
                    
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;
