import { loadEntryById, saveEntryById } from "@/utils/FileManagement";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Navbar from "../_components/Navbar";

const Page = () => {
    const { id } = useLocalSearchParams();
    const [article, setArticle] = useState();
    const router = useRouter();
    const contentInputRef = useRef(null);
    const titleInputRef = useRef(null);

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
                        router.push("/");
                        break;
                }
            }
        })();
    }, []);

    if (!article) {
        return (
            <View className="flex h-full w-full flex-col bg-neutral-200">
                <Navbar showBackButton />
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
            <Navbar showBackButton />
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
