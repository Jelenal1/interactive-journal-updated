import {
    deleteEntryById,
    loadEntries,
    saveEntryById,
} from "@/utils/FileManagement";
import { getStepsOfRange } from "@/utils/SensorManagement";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ArticlePreview from "./_components/ArticlePreview";
import Navbar from "./_components/Navbar";

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
            <Navbar />
            <ScrollView>
                <Pressable
                    onPress={async () => {
                        const currentSteps = await getStepsOfRange(
                            new Date().toLocaleDateString(),
                            new Date().toLocaleDateString(),
                        );
                        await saveEntryById("article", (articles.length + 1).toString(), {
                            id: (articles.length + 1).toString(),
                            date: new Date().toLocaleDateString(),
                            title: "",
                            steps: currentSteps,
                            content: "",
                            picture_references: [],
                        });

                        fetchArticles();
                    }}
                    className="ounded-full ml-auto mr-[65px] mt-2 flex w-10 items-center"
                >
                    <AntDesign name="pluscircleo" size={30} color="black" />
                </Pressable>
                {articles.map((article) => (
                    <Pressable
                        key={article.id}
                        onLongPress={(e) => {
                            e.preventDefault();
                            deleteEntryById("article", article.id);
                            fetchArticles();
                        }}
                    >
                        <ArticlePreview
                            date={article.date}
                            steps={article.steps}
                            title={article.title}
                            id={article.id}
                            key={article.id}
                            fetchArticles={fetchArticles}
                        />
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}
