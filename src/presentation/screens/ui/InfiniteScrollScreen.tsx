/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { ThemeContext } from '../../context/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5]);
  const { colors } = useContext(ThemeContext);

  const loadMore = () => {
    setTimeout(() => {
      setNumber([...number, ...[number[number.length - 1] + 1]]);
    }, 1000);
  };

  return (
    <View style={{ backgroundColor: colors.background }}>
      <FlatList
        data={number}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface Props {
  number: number;
}

const ListItem = ({ number }: Props) => (
  <FadeInImage
    url={`https://picsum.photos/id/${number}/500/400`}
    style={{ height: 400, width: '100%' }}
  />

  //   <Image
  //     source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
  //     style={{ height: 400, width: '100%' }}
  //   />
);
