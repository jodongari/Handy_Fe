import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { StoreEntity } from "../../constraint/network/response/store";

interface Props {
  stores?: StoreEntity[];
  onClickAddNewStore: () => void;
}


const StoreList = ({stores, onClickAddNewStore}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Header stores={stores} onClickAddNewStore={onClickAddNewStore} />
      { stores?.length > 0 ? (
        <ScrollView>
          {stores.map(store => <StoreItem store={store} />)}
        </ScrollView>
      ) : (
        <Empty />
      )}
    </View>
  )
};

const Header = ({ stores, onClickAddNewStore }: Props) => {
  return (
    <View>
      <View  style={styles.headerContainer}>
        <Text style={styles.headerText}>나의 가게 ({stores?.length || 0})</Text>
        <TouchableOpacity onPress={onClickAddNewStore}>
          <Text style={{color: '#007aff', fontSize: 20, fontWeight: 'bold',}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerDivider} />
    </View>
  )
}

const StoreItem = ({store}: {store: StoreEntity}) => {
  return (
    <TouchableOpacity onPress={() => {

    }}>
      <View style={styles.storeItemContainer}>
        <Image
          source={require("../../assets/images/good.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameLabel}>{store.name}</Text>
          <Text style={styles.descriptionLabel}>{store.introduction}</Text>
          <View style={styles.statusContainer}>
            <View style={{flex: 1, }} />
            <Text style={styles.statusLabel}>{store.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.storeItemDivider} />
    </TouchableOpacity>
  )
}

const Empty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>가게가 없습니다</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red',
  },
  headerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
  },
  headerDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee'
  },
  emptyContainer: {
    paddingVertical: 30,
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999999',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  storeItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white'
  },
  infoContainer: {
    marginLeft: 20,
    flex: 1,
  },
  nameLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    marginTop: 5,
  },
  statusContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
  },
  statusLabel: {
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: 'white',
    backgroundColor: '#333333'
  },
  storeItemDivider: {

    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee'
  }
})

export default StoreList;
