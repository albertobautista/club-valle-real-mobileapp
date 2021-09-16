import React from 'react'
import { View, Text, FlatList } from 'react-native'
import GalleryItem from './GalleryItem'

const HorizontalSlider = ({title, gallery, height=220,width=410}) => {
    return (
        <View style={{
            height: (title) ? 260 : 220
            }}>
            {title && <Text style={{fontSize:35, fontWeight:"bold", textAlign:"center", color:"#316767", marginBottom:12}}>{title}</Text> }
            <FlatList
                data={gallery}
                renderItem={ ({item}) => (
                    <GalleryItem gallery={item} height={height} width={width}/>
                )}
                keyExtractor={( item ) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            </View>
    )
}

export default HorizontalSlider
