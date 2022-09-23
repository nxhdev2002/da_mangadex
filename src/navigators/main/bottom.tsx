import React, {FC} from 'react';
import { Dimensions } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { HomeScreen } from '../../screens'
// import VideoPlayer from './test';
const MusicRoute: FC = () => <Text>Music</Text>;

const AlbumsRoute: FC = () => <Text>Albums</Text>;


const NotificationsRoute: FC = () => <Text>Notifications</Text>;

export const BottomNavigator: FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', icon: 'heart'},
    { key: 'albums', title: 'Albums', icon: 'album' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomeScreen,
    albums: AlbumsRoute,
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