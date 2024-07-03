const AsyncStorage =
  require("@react-native-async-storage/async-storage").default;

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const addItem = async (key, listId, item) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let lists = jsonValue != null ? JSON.parse(jsonValue) : null;
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
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(newLists));
  } catch (e) {
    console.log(e);
  }
};

const updateItem = async (key, listId, itemId, newItem) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let lists = jsonValue != null ? JSON.parse(jsonValue) : null;
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
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(newLists));
  } catch (e) {
    console.log(e);
  }
};

const removeItem = async (key, listId, itemId) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let lists = jsonValue != null ? JSON.parse(jsonValue) : null;
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
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(newLists));
  } catch (e) {
    console.log(e);
  }
};

const updateList = async (key, list) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let lists = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (!lists) {
      return;
    }
    let newLists = lists.filter((l) => l.id !== list.id);
    newLists.push(list);
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(newLists));
  } catch (e) {
    console.log(e);
  }
};

const deleteList = async (key, listId) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let lists = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (!lists) {
      return;
    }
    let newLists = lists.filter((l) => l.id !== listId);
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(newLists));
  } catch (e) {
    console.log(e);
  }
};

export { storeData, getData, addItem, updateItem, removeItem, updateList, deleteList};
