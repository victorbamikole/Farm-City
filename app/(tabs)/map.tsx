import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Alert,
  SafeAreaView,
} from "react-native";
import StackHeader from "@/components/StackHeader";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("first");

  const [value, setValue] = useState("");
  const [searchTerm, setSearch] = useState({
    term: "",
    fetchPredictions: false,
  });
  const [loaderVisible, setLoaderVisible] = useState(false);

  const [predictions, setPredictions] = useState([]);
  const [showPredictions, setShowPredictions] = useState(false);

  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      setLoaderVisible(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        setLoaderVisible(false);
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
      setRegion({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setLoaderVisible(false);
    })();
  }, []);

  const handleTextChange = (text: string) => {
    setValue(text);
    setSearch({ term: text, fetchPredictions: true });
  };

  const handleAnimationFinish = () => {
    setLoaderVisible(false);
  };

  const onPredictionTapped = (placeId: string, description: string) => {
    console.log("Tapped prediction:", placeId, description);
    setShowPredictions(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.light.background,
      }}
    >
      <View
        style={{
          marginHorizontal: 5,
        }}
      >
        <StackHeader
          title="Choose a pick-up point"
          onPress={() => router.back()}
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} region={region} showsUserLocation={true}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You are here"
            />
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loaderOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
