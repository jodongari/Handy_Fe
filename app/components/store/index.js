/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {getStores} from '../../store/actions/store_actions';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class StoreComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getStores());
  }

  renderStore = Stores =>
    Stores.documents
      ? Stores.documents.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.diaryContainer}>
              <View style={{height: 160}}>
                {item.seq ? (
                  <View style={styles.dateView}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      seq:{' '}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.seq}</Text>
                  </View>
                ) : null}

                {item.address ? (
                  <View style={styles.dateView}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      address:{' '}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.address}</Text>
                  </View>
                ) : null}

                {item.ownerSeq != null ? (
                  <View style={{paddingTop: 7, paddingLeft: 7}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      ownerSeq:{' '}
                    </Text>
                    <Text style={{fontSize: 16}}>{item.ownerSeq}</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;

  render() {
    return (
      <View>
        <ScrollView style={{backgroundColor: '#0f0f0f'}}>
          {this.renderStore(this.props.Stores)}
        </ScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: screenWidth * 0.8,
            top: screenHeight * 0.7,
          }}
          onPress={() => {
            this.props.navigation.navigate('storeDocu', {
              newStore: true,
            });
          }}>
          <Image
            source={require('../../assets/images/pen_circle.png')}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  diaryContainer: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 2,
  },
  indexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 12,
    alignItems: 'center',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingTop: 7,
    paddingLeft: 7,
  },
});

function mapStateToProps(state) {
  return {
    Stores: state.Stores,
  };
}

export default connect(mapStateToProps)(StoreComponent);
