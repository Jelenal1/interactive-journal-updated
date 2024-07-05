import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Pressable, View } from 'react-native';
import { saveEntryById } from '../utils/FileManagement';
const CameraImagePicker = ({
    article,
    setArticle
}) => {
    const saveImage = async (uri) => {
        await saveEntryById("article", article.id, {
            ...article,
            image: uri
        });
    }
    const pickImage = async () => {


        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        const fileUri = result.assets[0].uri
        if (!result.canceled) {
            setArticle({ ...article, image: fileUri });
            await saveImage(fileUri);
        }


    }

    return (
        <View className="flex justify-center items-center">
            <Pressable onPress={pickImage}>
                <AntDesign name="camera" size={25} color="black" className="m-auto" />
            </Pressable>
        </View>
    );
}


export default CameraImagePicker;
