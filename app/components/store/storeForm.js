/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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
  Button,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {registerStore} from '../../store/actions/store_actions';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';
import {bindActionCreators} from 'redux';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class StoreForm extends Component {
  state = {
    type: '매장 등록',
    action: '매장 등록',
    actionMode: '매장 등록',
    hasErrors: false,
    form: {
      ownerSeq: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: true,
        },
        valid: true,
      },
      name: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: true,
        },
        valid: true,
      },
      businessName: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      businessReportCardImageUrl: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      businessLicenseImageUrl: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      businessPersonName: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      businessNumber: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      businessAddress: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      address: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      telNumber: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      introduction: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      openTime: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      dayOff: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      originCountry: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      logoImageUrl: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      backgroundImageUrl: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
      category: {
        value: '',
        type: 'text-input',
        rules: {
          isRequired: false,
        },
        valid: true,
      },
    },
  };

  render() {
    return (
      <View>
        <Input
          value={this.state.form.ownerSeq.value}
          type={this.state.form.ownerSeq.type}
          placeholder="ownerSeq"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('ownerSeq', value)}
        />

        <Input
          value={this.state.form.name.value}
          type={this.state.form.name.type}
          placeholder="name"
          placeholderTextColor="#ddd"
          onChangeText={value => this.updateInput('name', value)}
        />

        {/*<Input*/}
        {/*  value={this.state.form.businessName.value}*/}
        {/*  type={this.state.form.businessName.type}*/}
        {/*  placeholder="businessName"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessName', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.businessReportCardImageUrl.value}*/}
        {/*  type={this.state.form.businessReportCardImageUrl.type}*/}
        {/*  placeholder="businessReportCardImageUrl"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessReportCardImageUrl', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.businessLicenseImageUrl.value}*/}
        {/*  type={this.state.form.businessLicenseImageUrl.type}*/}
        {/*  placeholder="businessLicenseImageUrl"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessLicenseImageUrl', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.businessPersonName.value}*/}
        {/*  type={this.state.form.businessPersonName.type}*/}
        {/*  placeholder="businessPersonName"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessPersonName', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.businessNumber.value}*/}
        {/*  type={this.state.form.businessNumber.type}*/}
        {/*  placeholder="businessNumber"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessNumber', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.businessAddress.value}*/}
        {/*  type={this.state.form.businessAddress.type}*/}
        {/*  placeholder="businessAddress"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('businessAddress', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.address.value}*/}
        {/*  type={this.state.form.address.type}*/}
        {/*  placeholder="address"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('address', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.telNumber.value}*/}
        {/*  type={this.state.form.telNumber.type}*/}
        {/*  placeholder="telNumber"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('telNumber', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.introduction.value}*/}
        {/*  type={this.state.form.introduction.type}*/}
        {/*  placeholder="introduction"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('introduction', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.openTime.value}*/}
        {/*  type={this.state.form.openTime.type}*/}
        {/*  placeholder="openTime"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('openTime', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.dayOff.value}*/}
        {/*  type={this.state.form.dayOff.type}*/}
        {/*  placeholder="dayOff"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('dayOff', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.originCountry.value}*/}
        {/*  type={this.state.form.originCountry.type}*/}
        {/*  placeholder="originCountry"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('originCountry', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.logoImageUrl.value}*/}
        {/*  type={this.state.form.logoImageUrl.type}*/}
        {/*  placeholder="logoImageUrl"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('logoImageUrl', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.backgroundImageUrl.value}*/}
        {/*  type={this.state.form.backgroundImageUrl.type}*/}
        {/*  placeholder="backgroundImageUrl"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('backgroundImageUrl', value)}*/}
        {/*/>*/}

        {/*<Input*/}
        {/*  value={this.state.form.category.value}*/}
        {/*  type={this.state.form.category.type}*/}
        {/*  placeholder="category"*/}
        {/*  placeholderTextColor="#ddd"*/}
        {/*  onChangeText={value => this.updateInput('category', value)}*/}
        {/*/>*/}

        <View style={{marginTop: 40}}>
          <View style={styles.button}>
            <Button
              title={this.state.action}
              color="#48567f"
              onPress={this.submitStore}
            />
          </View>
        </View>
      </View>
    );
  }

  submitStore = () => {
    let submittedForm = {};
    const formCopy = this.state.form;
    for (let key in formCopy) {
      submittedForm[key] = formCopy[key].value;
    }
    this.props.registerStore(submittedForm);
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    // rules
    let rules = formCopy[name].rules;
    formCopy[name].valid = ValidationRules(value, rules, formCopy);

    this.setState({
      form: formCopy,
    });
  };
}

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {
        marginTop: 15,
      },
      android: {
        marginTop: 15,
        marginBottom: 10,
      },
    }),
  },
});

function mapStateToProps(state) {
  return {
    Store: state.Store,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({registerStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreForm);
