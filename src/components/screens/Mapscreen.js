/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
export const MapScreen = ({ navigation, route }) => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 22.2587,
    longitude: 71.1924,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState({
    latitude: 22.2587,
    longitude: 71.1924,
  });
  return (
    <View style={styles.container}>
      <Text>Set Pick Up location </Text>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        onPress={(event) => {
          //console.log(event.nativeEvent.coordinate)
          setMarker(event.nativeEvent.coordinate);
          setmapRegion({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          console.log(marker);
        }}
      >
        <Marker coordinate={marker} title="Marker" />
      </MapView>
      <TouchableOpacity
        style={styles.buttonContainer23}
        onPress={() => {
          navigation.navigate("mapscreen2", {
            ...route.params,
            pickupLatitude: marker.latitude,
            pickupLongitude: marker.longitude,
          });
        }}
      >
        <Text style={{ fontSize: 18 }}>Confirm and Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer23: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgb(254,218,0)",
    padding: 15,
    borderRadius: 15,
  },
});
