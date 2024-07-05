import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Pressable, View } from 'react-native';
import { saveEntryById } from '../utils/FileManagement';

const CameraImagePicker = ({
    id
}) => {

    const [image, setImage] = React.useState(null);

    const saveImage = async (uri) => {
        saveEntryById("article", id, { image: uri });
    }
    const pickImage = async () => {


        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
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
