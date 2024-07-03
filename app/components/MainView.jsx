import React from "react";
import { View } from "react-native";

export default function MainView(props) {
  return <View className="bg-black h-full w-full px-4 py-2">{props.children}</View>;
}
