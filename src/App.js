import React, { Component } from 'react';
import './App.css';

import NavBar from "./components/NavBar";
import MeetupInfo from "./components/MeetupInfo";
import NextMeetup from "./components/NextMeetup";

import { Layout } from 'antd';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      meetups: []
    };

  }
  componentDidMount(){
    axios.get("http://localhost:8000/meetups").then(response => {
      setTimeout(() => {
        this.setState({ meetups: response.data});
      }, 5000);
    });
  }
  render() {
    return (
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Content>
          <MeetupInfo info={this.state.meetupInfo} />
          <NextMeetup meetups={this.state.meetups} addMeetup = {() => this.setState({meetups: this.state.meetups.concat({id: 3, title: 'another new meetup'})})}/>
        </Content>
      </Layout>
    );
  }
}

export default App;
