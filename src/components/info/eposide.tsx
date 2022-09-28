import React, {useEffect} from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { ChapterComponent } from '../manga';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../features';
import { fetchEposides } from '../../features/comic';
export const Eposide = () => {
    const current = useSelector((state: RootState) => state.current)
    const eposide = useSelector((state: RootState) => state.eposide)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchEposides(current))
    }, [dispatch])
    return (
        <ImageBackground source={{uri: 'https://media.discordapp.net/attachments/880688607881494538/1020672928150462494/IMG_20220917_192914.jpg'}} imageStyle={{opacity: 0.3}}>
            <FlatList
                data={eposide.data}
                renderItem={({item}) => (             
                    <ChapterComponent chapter={item} />
                )}
            />
        </ImageBackground>
    )
}