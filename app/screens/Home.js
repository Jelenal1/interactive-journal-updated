import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ArticlePreview from "../components/ArticlePreview";
import {
    loadEntries,
    saveEntryById
} from "../utils/FileManagement";
import { getStepsOfRange } from "../utils/SensorManagement";

export default function Page() {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        const savedArticles = await loadEntries("article");
        setArticles(savedArticles);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    if (!articles) {
        return null;
    }

    return (
        <View className="flex h-full w-full flex-col bg-neutral-200">
            <ScrollView className="mx-auto">
                <Pressable
                    onPress={async () => {
                        const currentSteps = await getStepsOfRange(
                            new Date().toLocaleDateString(),
                            new Date().toLocaleDateString(),
                        );
                        const entryToSave = {
                            id: (articles.length + 1).toString(),
                            date: new Date().toLocaleDateString(),
                            title: "",
                            steps: currentSteps,
                            content: "",
                            image: ""
                        }

                        await saveEntryById("article", entryToSave.id,
                            entryToSave
                        );
                        fetchArticles();
                    }}
                    className="rounded-full ml-auto mt-2 flex w-10 items-center"
                >
                    <AntDesign name="pluscircleo" size={30} color="black" />
                </Pressable>
                {articles.map((article) => (


                    <ArticlePreview
                        date={article.date}
                        steps={article.steps}
                        title={article.title}
                        id={article.id}
                        key={article.id}
                        fetchArticles={fetchArticles}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
