import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import Storage from "react-native-storage";

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    enableCache: true,
    defaultExpires: null,
});

export const saveEntry = async (key, data) => {
    storage.save({
        key: key,
        data: data,
    });
};

export const saveEntryById = async (key, id, data) => {
    storage.save({
        key: key,
        id: id,
        data: data,
    });
};

export const loadEntry = async (key) => {
    return await storage.load({
        key: key,
    });
};

export const loadEntryById = async (key, id) => {
    return await storage.load({
        key: key,
        id: id,
    });
};

export const loadEntries = async (key) => {
    return await storage.getAllDataForKey(key);
};

export const deleteEntry = async (key) => {
    storage.remove({
        key: key,
    });
};

export const deleteEntryById = async (key, id) => {
    storage.remove({
        key: key,
        id: id,
    });
};

export const deleteAllEntries = async () => {
    await storage.clearMap();
};

export const confirmDialog = (message) => {
    return new Promise((resolve) => {
        Alert.alert(
            "Confirm",
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => resolve(false),
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => resolve(true),
                },
            ],
            { cancelable: false },
        );
    });
};
