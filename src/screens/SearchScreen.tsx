import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { SmallComponent } from '../components/manga'
import { AppDispatch, RootState } from '../features'
import { fetchSearchResult, setCurrent } from '../features/comic'
import { StackNavigation } from '../navigators/main'


export const SearchScreen: FC = () => {
    const navigation = useNavigation<StackNavigation>();
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const comic = useSelector((state: RootState) => state.comic)
    const offset = 0
    const dispatch = useDispatch<AppDispatch>()
    return (
        <SafeAreaView style={{ justifyContent: 'center' }}>
            <TextInput
                mode='outlined'
                label={'Search'}
                left={<TextInput.Icon name="cat" />}
                right={<TextInput.Icon name="filter" />}
                placeholder={'One Piece, Naruto, Hentai, ..'}
                autoFocus
                onChangeText={(text) => {
                    setIsSearching(true)
                    dispatch(fetchSearchResult({
                        title: text,
                        offset: offset
                    }))
                }}
                style={{
                    width: '80%',
                    alignSelf: 'center'
                }}
            />
            {isSearching ?
            <>
            <ActivityIndicator animating={comic.search.loading} />
            <FlatList
                    data={comic.search.data}
                    renderItem={({ item }) => (
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
                    keyExtractor={(key) => key.id} 
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
            />
            </>
                : <Text style={{textAlign: 'center'}}>Result will be appear here</Text>
            }

        </SafeAreaView>
    )
}