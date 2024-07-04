import React, { useRef, useState } from "react";
import MainView from "../components/MainView";
import { CameraView, useCameraPermissions } from "expo-camera";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { View, Text, Button, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getData, updateItem } from "../utils/Storage";

export default function Camera(props) {
  const [flash, setFlash] = useState("off");
  const [torch, setTorch] = useState(false);
  const [startZoom, setStartZoom] = useState(1);
  const [zoom, setZoom] = useState(0);
  const cameraRef = useRef();
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState("");

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  const pinch = Gesture.Pinch()
    .onStart(() => {
      setStartZoom(zoom);
    })
    .onUpdate((event) => {
      setZoom(clamp(startZoom * event.scale * 1.7, 0, 1));
    })
    .runOnJS(true);

  if (!permission) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestPermission();
          }}
          title="grant permission"
        />
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestPermission();
          }}
          title="grant permission"
        />
      </View>
    );
  }

  function takePicture() {
    cameraRef.current.takePictureAsync().then((image) => {
      setCapturedImage(image.uri);
    });
    // Take a picture with the camera.
  }
  async function usePicture() {
    let newItem = {
      id: props.route.params.item.id,
      name: props.route.params.item.name,
      imageUri: capturedImage,
      done: props.route.params.item.done,
    };
    await updateItem(
      "lists",
      props.route.params.list.id,
      props.route.params.item.id,
      newItem
    );
    let lists = await getData("lists");
    let list = lists.find((l) => l.id === props.route.params.list.id);
    setCapturedImage("");
    setFlash("off");
    setTorch(false);
    props.navigation.navigate("List", { list });
  }

  if (capturedImage !== "") {
    return (
      <MainView>
        <View className=" h-10 bg-black ">
          <Pressable
            onPress={() => {
              setCapturedImage("");
              setFlash("off");
              setTorch(false);
            }}
          >
            <MaterialCommunityIcons name="close" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1 justify-center items-center">
          <Image src={capturedImage} className="h-full w-full" />
        </View>
        <View className=" h-20 bg-black flex flex-row justify-center items-center">
          <Pressable
            onPress={() => {
              usePicture();
            }}
          >
            <Text className="text-white text-xl">Use this Photo</Text>
          </Pressable>
        </View>
      </MainView>
    );
  }

  return (
    <MainView>
      <View className=" h-10 bg-black flex flex-row justify-end items-center">
        {facing === "back" ? (
          torch ? (
            <Pressable
              onPress={() => {
                setTorch(false);
              }}
            >
              <MaterialCommunityIcons
                name="flashlight"
                size={30}
                color="white"
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setTorch(true);
              }}
            >
              <MaterialCommunityIcons
                name="flashlight-off"
                size={30}
                color="white"
              />
            </Pressable>
          )
        ) : null}
        {facing === "back" ? (
          flash === "off" ? (
            <Pressable
              onPress={() => {
                setFlash("on");
              }}
            >
              <MaterialCommunityIcons
                name="flash-outline"
                size={30}
                color="white"
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setFlash("off");
              }}
            >
              <MaterialCommunityIcons name="flash" size={30} color="white" />
            </Pressable>
          )
        ) : null}
        <Pressable onPress={toggleCameraFacing}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={30}
            color="white"
          />
        </Pressable>
      </View>

      <GestureHandlerRootView className="w-full flex justify-center items-center">
        <CameraView
          className="flex w-full justify-end items-center rounded-md mb-12"
          facing={facing}
          ref={cameraRef}
          animateShutter={false}
          flash={flash}
          enableTorch={torch}
          zoom={zoom}
        >
          <GestureDetector gesture={pinch}>
            <View className="h-4/5 w-full"></View>
          </GestureDetector>
          <Pressable
            className="h-20 w-20 border-4 border-white rounded-full mb-4"
            onPress={takePicture}
          ></Pressable>
        </CameraView>
      </GestureHandlerRootView>
    </MainView>
  );
}
