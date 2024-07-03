import React, { useEffect } from "react";
import MainView from "../components/MainView";
import { Pressable, TextInput, View, Text } from "react-native";
import { useState } from "react";
import { updateList, deleteList } from "../utils/Storage";

export default function EditList(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const saveList = async () => {
    try {
      let newList = {
        id: props.route.params.list.id,
        name: name,
        description: description,
        items: props.route.params.list.items,
      };
      await updateList("lists", newList);
      props.navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  const deletelist = async () => {
    try {
      await deleteList("lists", props.route.params.list.id);
      props.navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const list = props.route.params.list;
    setName(list.name);
    setDescription(list.description);
  }, []);

  return (
    <MainView>
      <View className="flex flex-col justify-between items-center h-full pb-12">
        <View className="w-full flex flex-col">
          <Text className="text-white text-2xl">Edit List</Text>
          <TextInput
            className="border-b-2 border-white w-full p-2 mt-2 text-white "
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            placeholderTextColor="white"
          />
          <TextInput
            className="border-b-2 border-white w-full p-2 mt-2 text-white "
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Description"
            placeholderTextColor="white"
          />
        </View>
        <Pressable className="bg-red-500 p-2 mt-4 rounded-md w-full" onPress={deletelist}>
          <Text className="text-white text-xl text-center">Delete</Text>
        </Pressable>
        <Pressable className="bg-blue-500 p-2 mt-4 rounded-md w-full" onPress={saveList}>
          <Text className="text-white text-xl text-center">Save</Text>
        </Pressable>
      </View>
    </MainView>
  );
}
