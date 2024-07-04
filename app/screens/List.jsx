import React, { useEffect, useRef, useState } from "react";
import MainView from "../components/MainView";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { addItem, getData, removeItem, updateItem } from "../utils/Storage";
import { Keyboard } from "react-native";

export default function List(props) {
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState({
    id: "",
    name: "",
    imageUri: "",
    done: false,
  });
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const inputRef = useRef();

  const addNewItem = async () => {
    if (item === "") {
      return;
    }
    await addItem("lists", props.route.params.list.id, item);
    let lists = await getData("lists");
    let list = lists.find((l) => l.id === props.route.params.list.id);
    setItem("");
    props.navigation.navigate("List", { list });
  };

  const editItemFunc = async () => {
    if (item === "") {
      return;
    }
    let newItem = {
      id: editItem.id,
      name: item,
      imageUri: editItem.imageUri,
      done: editItem.done,
    };
    await updateItem("lists", props.route.params.list.id, editItem.id, newItem);
    let lists = await getData("lists");
    let list = lists.find((l) => l.id === props.route.params.list.id);
    setEditItem({ id: "", name: "", imageUri: "", done: false });
    setItem("");
    props.navigation.navigate("List", { list });
  };

  const checkBox = async (item) => {
    await updateItem("lists", props.route.params.list.id, item.id, item);
    let lists = await getData("lists");
    let list = lists.find((l) => l.id === props.route.params.list.id);
    props.navigation.navigate("List", { list });
  };

  const deleteItem = async (deleteitem) => {
    if (deleteitem.id === "") {
      return;
    }
    await removeItem("lists", props.route.params.list.id, deleteitem.id);
    let lists = await getData("lists");
    let list = lists.find((l) => l.id === props.route.params.list.id);
    setItem("");
    props.navigation.navigate("List", { list });
  };

  useEffect(() => {
    if (editItem.id !== "") {
      inputRef.current.focus();
    }
    function onKeyboardDidShow(e) {
      if (Platform.OS === "ios") {
        setKeyboardHeight(e.endCoordinates.height);
      }
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });
  return (
    <MainView>
      <View className="flex h-full pb-10 ">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-col justify-center items-start">
            <Text className="text-white text-xl">
              {props.route.params.list.name}
            </Text>
            <Text className="text-white text-sm">
              {props.route.params.list.description}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              props.navigation.navigate("EditList", {
                list: props.route.params.list,
              });
            }}
          >
            <MaterialCommunityIcons name="pencil" size={24} color="white" />
          </Pressable>
        </View>
        <FlatList
          data={props.route.params.list.items.sort((a, b) => {
            if (a.done && !b.done) {
              return 1;
            }
            if (!a.done && b.done) {
              return -1;
            }
            return 0;
          })}
          renderItem={({ item }) => (
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-2">
                <Checkbox
                  value={item.done}
                  onValueChange={(value) => {
                    checkBox({
                      id: item.id,
                      name: item.name,
                      imageUri: item.imageUri,
                      done: value,
                    });
                  }}
                />
                <Text className="text-white text-xl">{item.name}</Text>
              </View>
              <View className="flex flex-row items-center gap-2">
                {item.imageUri !== "" ? (
                  <Pressable
                    onPress={() => {
                      props.navigation.navigate("Picture", {
                        imageUri: item.imageUri,
                      });
                    }}
                  >
                    <Image
                      source={{ uri: item.imageUri }}
                      style={{ width: 50, height: 50 }}
                    />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      props.navigation.navigate("Cam", {
                        list: props.route.params.list,
                        item: item,
                      });
                    }}
                  >
                    <MaterialCommunityIcons
                      name="camera"
                      size={20}
                      color="white"
                    />
                  </Pressable>
                )}
                <Pressable
                  onPress={() => {
                    setItem(item.name);
                    setEditItem(item);
                  }}
                  className="p-2"
                >
                  <MaterialCommunityIcons
                    name="pencil"
                    size={20}
                    color="white"
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    deleteItem(item);
                  }}
                >
                  <MaterialCommunityIcons name="delete" size={20} color="red" />
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View
          className="flex flex-row justify-between justify-self-end gap-2"
          style={{
            marginBottom: keyboardHeight,
          }}
        >
          <TextInput
            className="border-b-2 border-white flex-1 p-2 text-white"
            placeholder="Name"
            placeholderTextColor="white"
            value={item}
            onChangeText={(text) => {
              setItem(text);
            }}
            ref={inputRef}
          />
          {editItem.id !== "" ? (
            <Pressable
              className="bg-blue-500 p-2 rounded-md"
              onPress={editItemFunc}
            >
              <MaterialCommunityIcons
                name="content-save"
                size={32}
                color="white"
              />
            </Pressable>
          ) : (
            <Pressable
              className="bg-blue-500 p-2 rounded-md"
              onPress={addNewItem}
            >
              <MaterialCommunityIcons name="plus" size={32} color="white" />
            </Pressable>
          )}
        </View>
      </View>
    </MainView>
  );
}
