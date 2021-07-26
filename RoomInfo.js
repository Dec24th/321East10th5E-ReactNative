import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderRoom({room}) {
  if (room){
    return (
      <Card
        title={room.name}
        image={require('../assets/snack-icon.png')}
      >
      <Text style={{margin: 10}}>
        {room.description}
      </Text>
      </Card>
    );
  }
  return <View />
}

function RoomInfo(props) {
  return <RenderRoom room={props.room} />

}

export default RoomInfo;