import React from 'react';

class NextMeetup extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Meetups</h2>
        <ul>{this.props.meetups.map(meetup => <li key={meetup.id}>{meetup.title}</li>) }</ul>
        <button onClick={this.props.addMeetup}>Add New Meetup</button>
      </div>
    );
  }
}

export default NextMeetup;
