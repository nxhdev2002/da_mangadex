import { StackScreenProps } from "@react-navigation/stack";
import React, { FC, useState, useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { RootStackParamList } from '../navigators/main'
import { ChapterState, ComicState } from "../type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features";
import { fetchPictures } from "../features/comic";
import { RemoteImage } from "../components/read";
type Props = StackScreenProps<RootStackParamList, 'ReadScreen'>;


export const ReadScreen = ({ navigation, route }: Props) => {
    const eposide: ChapterState = route.params.eposide
    const comic = useSelector((state: RootState) => state.current)
    const pictures = useSelector((state: RootState) => state.picture)
    const dispatch = useDispatch<AppDispatch>()
    const [desiredHeight, setDesiredHeight] = React.useState(0)
    const [touchY, setTouchY] = useState(0)
    useEffect(() => {
        dispatch(fetchPictures({comic: comic, eposide: eposide}))
    }, [dispatch])
    return (
        <View>
            <FlatList
                data={pictures.data}
                renderItem={({item}) => (
                    <RemoteImage
                        uri={item}
                        desiredWidth={Dimensions.get('window').width}
                    />
                )}
                onTouchStart={e=> setTouchY(e.nativeEvent.pageY)}
                onTouchEnd={e => {
                    // if (touchY - e.nativeEvent.pageY > 20) {
                    //     dispatch(setAppbar(false))
                    // } else {
                    //     dispatch(setAppbar(true))
                    // }
                } }
            />
            {/* <AppBarFooter /> */}
        </View>
    )
}