import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ItemProps = {
  url: any;
  title: any,
  weight: any
};

const FarmItem = ({ url, title, weight }: ItemProps) => {
  return (
    <View style={{ width: 200, borderRadius: 20, margin: 10, }}>
      <Image
        style={{ width: 200, height: 150, borderRadius: 20 }}
        source={{
          uri: url,
        }}
      />

      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>{title}</Text>
      </View>

      <View style={{ paddingTop: 3}}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>N{weight}/kg</Text>
      </View>
    </View>
  );
};

export default FarmItem

const styles = StyleSheet.create({})