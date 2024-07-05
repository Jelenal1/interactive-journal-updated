const ArticlePreview = ({
    title,
    date,
    steps,
    id,
    fetchArticles,
}) => {
    return (
        <>
            <Pressable
                className="absolute left-5 top-14 aspect-square w-12"
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
            <Link href={`/article/${id}`} className="mx-auto my-5">
                <View className="flex w-80 flex-col items-center rounded bg-slate-400 bg-opacity-50 p-5">
                    <Text className="text-xl">{title}</Text>
                    <Text>{date}</Text>
                    <Text>{"🏃🏻‍♀️ " + steps + " Schritte"}</Text>
                </View>
            </Link>
        </>
    );
};

export default ArticlePreview;
