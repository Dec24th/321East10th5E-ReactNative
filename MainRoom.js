import React, { Component } from 'react';
import { View } from 'react-native';
import DirectoryRoom from './DirectoryRoom';
import RoomInfo from './RoomInfo';
import { ROOMS } from '../assets/rooms';

class MainRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: ROOMS,
      selectedRoom: null
    };
  }

  onRoomSelect(roomId) {
    this.setState({selectedRoom: roomId});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <DirectoryRoom
          rooms={this.state.rooms}
          onPress={roomId => this.onRoomSelect(roomId)}
        />
        <RoomInfo
          room={this.state.rooms.filter(
            room => room.id === this.state.selectedRoom)[0]}
        />
      </View>
    )
  }
}

export default MainRoom;