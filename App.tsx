import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '2', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '3', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '4', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '5', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '6', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '7', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '8', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '9', title: 'Women ', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '10', title: 'Women', price: 'Rp 900.000', imageUrl:'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '11', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '12', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '13', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '14', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '15', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '16', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '17', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '18', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '19', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '20', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
  { id: '21', title: 'Women', price: 'Rp 900.000', imageUrl: 'https://i.pinimg.com/474x/4f/4c/85/4f4c855b8303806fef25fb961bc0010d.jpg' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://i.pinimg.com/474x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Beauty </Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});

