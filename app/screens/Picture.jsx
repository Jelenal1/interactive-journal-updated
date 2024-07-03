import React from "react";
import { Image } from "react-native";
import MainView from "../components/MainView";

export default function Picture(props) {
  return (
    <MainView>
      <Image
        source={{ uri: props.route.params.imageUri }}
        style={{ width: "100%", height: "100%" }}
      />
    </MainView>
  );
}
