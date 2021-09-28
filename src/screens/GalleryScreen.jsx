import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, SectionList, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';
import { albums } from '../data/galleryAlbums';
import ItemSeparator from '../components/ItemSeparator';
import { AnimatedImage } from '../components/AnimatedImage';

const GalleryScreen = ({ navigation }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons
            name="md-menu"
            size={40}
            color="black"
            style={{ marginLeft: 10, color: colors.primary }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={{ ...styles.globalBackground, backgroundColor: colors.card, marginBottom: 50 }}>
      <SectionList
        sections={albums}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ImageAlbum picture={item} />}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { albumTitle } }) => (
          <View
            style={{ backgroundColor: colors.background, paddingLeft: 20, paddingVertical: 10 }}
          >
            <Text style={{ color: colors.primary, fontSize: 30 }}>{albumTitle}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const ImageAlbum = ({ picture }) => {
  console.log('picture', picture.url);
  const windowWidth = Dimensions.get('window').width;
  const urlImage = picture.url;
  return <AnimatedImage uri={urlImage} style={{ width: windowWidth, height: 200 }} />;
};

export default GalleryScreen;
