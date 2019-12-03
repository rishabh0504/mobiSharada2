/**
* This is the Signup Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Container, View, Left, Right, Button, Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import BgImg from '../assets/profile.png';
// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        name: '',
        username: '',
        password: '',
        rePassword: '',
        hasError: false,
        errorText: ''
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
   
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={null} title="Profile" />
        <Text style={styles.companyName}>Shree Sharada Sah Bank Pvt. Ltd.</Text>
        <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 14,
              color: 'red',
              marginRight: 10,
              marginBottom: 10
            }}>
            Last Login : 02-Dec-2019 09:08
          </Text>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginLeft:20, marginRight:20,marginTop:20}}>
            <Image style={styles.image} source={BgImg} />
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'200',marginTop:20,color:'blue'}}>Welcome</Text>
            <Text style={{ textAlign:'center',fontSize:15,fontWeight:'200',marginTop:15,color:'blue'}}>Mr. Pashkanthi Vishal Balkisan</Text>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{ fontSize:15,fontWeight:'200',marginTop:15,color:'blue'}}>Customer ID : 54126</Text>
            <Text style={{ fontSize:15,fontWeight:'200',marginTop:15,color:'blue'}}>IMPS MMID : 452452345</Text>
            <Text style={{ fontSize:15,fontWeight:'200',marginTop:15,color:'blue'}}>Primary A/c: 000234000233402304</Text>
            <Text style={{ fontSize:15,fontWeight:'200',marginTop:15,color:'blue'}}>Parent Branch : 01~Satara Road</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

let styles = StyleSheet.create({
    textFormat: {
      color: 'black',
      fontSize: 15
    },
    textColor: {
      color: '#004f86',
      fontSize: 15
    },
    textColorTitle: {
      color: '#004080',
      fontSize: 17,
      textAlign: 'center'
    },
    centerAlign: {
      textAlign: 'center',
      fontSize: 15,
      color: '#004080'
    },
    companyName: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
      marginTop: 10,
      color: '#004080'
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(189, 195, 199, 0.6)',
      marginTop: 10,
      marginBottom: 10
    },
    tabCss: {
      flex: 1,
      height: 50,
      justifyContent: 'center',
      alignContent: 'center'
    },
    activeTab: {
      height: 50,
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#e5e5e5',
      borderBottomWidth: 1,
      borderBottomColor: 'white'
    },
    inactiveTab: {
      height: 50,
      alignContent: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e5e5'
    },
    tabView: {
      flex: 1
    },
    border: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      borderWidth: 1,
      borderColor: 'rgba(253, 253, 253, 0.2)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(30, 42, 54, 0.4)'
    },
    title: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      fontSize: 35,
      paddingLeft: 10
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(189, 195, 199, 0.6)',
      marginTop: 10,
      marginBottom: 10
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      
    },
    image: {
        height: 200,
        width: null,
        flex: 1
      }
  });
  