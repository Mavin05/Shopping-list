import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const ShoppingList = ({ list, deleteItem }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator}></View>;
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => deleteItem(item)}>
            <View style={styles.container}>
              <Text style={styles.item}>{item.todo}</Text>
              <MaterialIcons name="delete" size={20} color="balck" style={styles.icon}/>
            </View>
          </TouchableOpacity>
        );
      }}
      style={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontWeight: "bold",
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#d3d3d3",
  },
  flatlist: {
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight:20
  }
});