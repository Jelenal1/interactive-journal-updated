import React, { useState } from "react";
import MainView from "../components/MainView";
import { Text, TextInput, Pressable } from "react-native";
import { storeData, getData } from "../utils/Storage";

export default function NewList(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const saveList = async () => {
    try {
      const lists = await getData("lists");
      if (!lists) {
        const newList = { id: 0, name, description, items: [] };
        await storeData("lists", [newList]);
        props.navigation.navigate("Home");
        return;
      }
      const newList = { id: lists.length, name, description, items: [] };
      await storeData("lists", [...lists, newList]);
      props.navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainView>
      <Text className="text-white text-2xl">New List</Text>
      <TextInput
        className="border-b-2 border-white w-full p-2 mt-2 text-white "
        placeholder="Name"
        placeholderTextColor="white"
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        className="border-b-2 border-white w-full p-2 mt-2 text-white "
        placeholder="Description"
        placeholderTextColor="white"
        value={description}
        onChangeText={(text) => {
          setDescription(text);
        }}
      />

      <Pressable
        onPress={() => {
          saveList();
        }}
        className="bg-blue-500 p-2 mt-4 rounded-md "
      >
        <Text className="text-white text-xl text-center">Save</Text>
      </Pressable>
    </MainView>
  );
}
