import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { confirmDialog, deleteEntryById } from "../utils/FileManagement";

const ArticlePreview = ({
    title,
    date,
    steps,
    id,
    fetchArticles,
}) => {
    const navigation = useNavigation();
    return (
        <>
            <Pressable
                onPress={async () => {
                    const confirmed = await confirmDialog(
                        "Are you sure you want to delete this article?",
                    );

                    if (!confirmed) {
                        return;
                    }
                    await deleteEntryById("article", id);
                    fetchArticles();
                }}
            >
                <AntDesign name="delete" size={25} color="black" className="m-auto" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Article", { id })}>
                <View className="flex w-80 flex-col items-center rounded bg-slate-400 bg-opacity-50 p-5">
                    <Text className="text-xl">{title}</Text>
                    <Text>{date}</Text>
                    <Text>{"🏃🏻‍♀️ " + steps + " Schritte"}</Text>
                </View>

            </Pressable>
        </>
    );
};

export default ArticlePreview;
