import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { loadEntryById, saveEntryById } from "../utils/FileManagement";

const Page = () => {
    const route = useRoute();
    const { id } = route.params;
    const [article, setArticle] = useState();
    const contentInputRef = useRef(null);
    const titleInputRef = useRef(null);
    const navigate = useNavigation();

    const handleChange = async (text, field) => {
        setArticle({ ...article, [field]: text });
        await saveEntryById("article", id, { ...article, [field]: text });
    };

    useEffect(() => {
        (async () => {
            try {
                const savedArticle = await loadEntryById("article", id);
                setArticle(savedArticle);
                if (savedArticle) {
                    contentInputRef.current?.focus();
                }
            } catch (error) {
                console.log(error);
                switch (error.name) {
                    case "NotFoundError":
                        navigate.navigate("Home")
                        break;
                }
            }
        })();
    }, []);

    if (!article) {
        return (
            <View className="flex h-full w-full flex-col bg-neutral-200">
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <View
            className="flex h-full w-full flex-col bg-neutral-200"
            onTouchEndCapture={() => {
                if (titleInputRef.current?.isFocused()) {
                    return;
                }
                contentInputRef.current?.focus();
            }}
        >

            <ScrollView>
                <View className="flex w-full flex-col items-center">
                    <TextInput
                        className={
                            article?.title ? "text-3xl" : "border text-3xl text-gray-300"
                        }
                        value={article?.title}
                        onChange={(e) => handleChange(e.nativeEvent.text, "title")}
                        ref={titleInputRef}
                        placeholder="Title"
                    />
                    <Text>{article?.date}</Text>
                    <Text>{"🏃🏻‍♀️ " + article?.steps + " Schritte"}</Text>
                </View>
                <TextInput
                    multiline
                    className="mx-auto flex w-3/4 text-start text-lg caret-black"
                    value={article?.content}
                    onChange={(e) => handleChange(e.nativeEvent.text, "content")}
                    ref={contentInputRef}
                />
            </ScrollView>
        </View>
    );
};

export default Page;
