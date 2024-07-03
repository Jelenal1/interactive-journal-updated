import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import MainView from "../components/MainView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getData } from "../utils/Storage";

export default function Home(props) {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    try {
      const lists = await getData("lists");
      setLists(lists);
      console.log(lists);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <MainView>
      <View className="w-full flex justify-between flex-row items-center">
        <Text className="text-white text-2xl">Lists</Text>
        <Pressable
          onPress={() => {
            props.navigation.navigate("NewList");
          }}
        >
          <MaterialCommunityIcons name="plus" size={32} color="white" />
        </Pressable>
      </View>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              props.navigation.navigate("List", { list: item });
            }}
            className="border-b border-gray-400 w-full p-2 mt-2 flex flex-row justify-between items-center"
            key={item.id}
          >
            <Text className="text-white text-xl">{item.name}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="white"
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </MainView>
  );
}
