import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

const storeData = async (key, value) => {
  try {
    storage.save({
      key: key,
      data: value,
    });
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const value = await storage.load({ key: key });
    return value;
  } catch (e) {
    console.log(e);
  }
};

const addItem = async (key, listId, item) => {
  try {
    let lists = await storage.load({ key: key });
    if (!lists) {
      return;
    }
    let list = lists.find((list) => list.id === listId);
    const newItem = {
      id: list.items.length + 1,
      name: item,
      imageUri: "",
      done: false,
    };
    list.items.push(newItem);
    let newLists = lists.filter((l) => l.id !== listId);
    newLists.push(list);
    await storage.remove({ key: key });
    await storage.save({
      key: key,
      data: newLists,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateItem = async (key, listId, itemId, newItem) => {
  try {
    let lists = await storage.load({ key: key });
    if (!lists) {
      return;
    }
    let list = lists.find((list) => list.id === listId);
    let item = list.items.find((item) => item.id === itemId);
    item.name = newItem.name;
    item.imageUri = newItem.imageUri;
    item.done = newItem.done;
    let newLists = lists.filter((l) => l.id !== listId);
    newLists.push(list);
    await storage.remove({ key: key });
    await storage.save({
      key: key,
      data: newLists,
    });
  } catch (e) {
    console.log(e);
  }
};

const removeItem = async (key, listId, itemId) => {
  try {
    let lists = await storage.load({ key: key });
    if (!lists) {
      return;
    }
    console.log(lists);
    let list = lists.find((list) => list.id === listId);
    let newItems = list.items.filter((item) => item.id !== itemId);
    let newlist = {
      id: list.id,
      name: list.name,
      description: list.description,
      items: newItems,
    };
    let newLists = lists.filter((l) => l.id !== listId);
    newLists.push(newlist);
    await storage.remove({ key: key });
    await storage.save({
      key: key,
      data: newLists,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateList = async (key, list) => {
  try {
    let lists = await storage.load({ key: key });
    if (!lists) {
      return;
    }
    let newLists = lists.filter((l) => l.id !== list.id);
    newLists.push(list);
    await storage.remove({ key: key });
    await storage.save({
      key: key,
      data: newLists,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteList = async (key, listId) => {
  try {
    let lists = await storage.load({ key: key });
    if (!lists) {
      return;
    }
    let newLists = lists.filter((l) => l.id !== listId);
    await storage.remove({ key: key });
    await storage.save({
      key: key,
      data: newLists,
    });
  } catch (e) {
    console.log(e);
  }
};

export {
  storeData,
  getData,
  addItem,
  updateItem,
  removeItem,
  updateList,
  deleteList,
};
