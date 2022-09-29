import React, {FC} from 'react';
import { Dimensions } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { HomeScreen, SearchScreen } from '../../screens'
// import VideoPlayer from './test';
const MusicRoute: FC = () => <Text>Music</Text>;

const AlbumsRoute: FC = () => <Text>Albums</Text>;
type route = {
  key: string,
  title: string,
  icon: string
}

const NotificationsRoute: FC = () => <Text>Notifications</Text>;

export const BottomNavigator: FC = () => {
  const [index, setIndex] = React.useState<number>(1);
  const [routes] = React.useState<route[]>([
    { key: 'albums1', title: 'Albums', icon: 'album' },
    { key: 'mangadex', title: 'MangaDex', icon: 'cat'},
    { key: 'search', title: 'Search', icon: 'cloud-search' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    albums1: AlbumsRoute,
    mangadex: HomeScreen,
    search: SearchScreen,
    // recents: RecentsRoute,
    // notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};