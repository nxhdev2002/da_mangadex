import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native'
import { SmallComponent } from '../manga';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { AppDispatch, RootState } from '../../features';
import { fetchPopular, setCurrent } from '../../features/comic';
import { ComicState } from '../../type';
import { StackNavigation } from '../../navigators/main';
export const Popular = () => {
    const navigation = useNavigation<StackNavigation>();
    const [offset, setOffset] = useState(0)
    const popular = useSelector((state: RootState) => state.comic.popular)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchPopular(offset))
    }, [offset])
    return (    
        <View style={{flex: 2, justifyContent: 'center', top: 20}}>
            <ImageBackground source={{uri: 'https://media.discordapp.net/attachments/880688607881494538/1020672928758632448/IMG_20220917_192919.jpg'}} imageStyle={{opacity: 0.3}}>
                <Text style={{fontSize: 20, fontWeight:'600', marginLeft: 20}}>Popular</Text>
                <ActivityIndicator animating={popular.loading} />
                <FlatList
                    data={popular.data}
                    keyExtractor={(key) => key.id}
                    renderItem={({item}) => (
                        <SmallComponent 
                            source={item.thumb} 
                            name={item.name} 
                            goToInfo={() => {
                                    dispatch(setCurrent(item))
                                    navigation.navigate("InfoScreen", {comic: item}) 
                                }
                            }
                        />
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    onEndReached={() => {
                        setOffset(offset => offset + 10)
                    }}
                    onEndReachedThreshold={0.7}
                />  
            </ImageBackground>
        </View>
    )
}

