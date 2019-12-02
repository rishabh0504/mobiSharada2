/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'accounts'
    }
  }
  activateTab = (tab) => {
    this.setState({ activeTab: tab }, () => {
      Alert.alert(tab)
    })
  }
  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-power' />
        </Button>
      </Right>
    );
    let activeTab = null;
    if (this.state.activeTab == 'accounts') {
      activeTab = <View style={styles.tabView}>
        <Text style={styles.centerAlign}>Accounts</Text>
      </View>
    } else if (this.state.activeTab == 'deposits') {
      activeTab = <View style={styles.tabView} >
        <Text style={styles.centerAlign}>Deposits</Text>
      </View>
    } else if (this.state.activeTab == 'loans') {
      activeTab = <View style={styles.tabView} >
        <Text style={styles.centerAlign}>Loans</Text>
      </View>
    }

    return (
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
        <Container>
          <Navbar left={left} right={right} title="mobiSharada" />
          <Content>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
              <View style={styles.tab}>
                <TouchableOpacity onPress={() => { this.activateTab('accounts') }}>
                  <Text style={styles.centerAlign} >Accounts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tab} >
                <TouchableOpacity onPress={() => { this.activateTab('deposits') }}>
                  <Text style={styles.centerAlign} >Deposits</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tab}>
                <TouchableOpacity onPress={() => { this.activateTab('loans') }}>
                  <Text style={styles.centerAlign} >Loans</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
              {activeTab}
            </View>
          </Content>
        </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for (var i = 0; i < categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
  },
  {
    id: 4,
    title: 'ACCESORIES',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
  }
];


let styles = StyleSheet.create({
  centerAlign: {
    textAlign: 'center',
    fontSize: 17,
    borderBottomColor: 'red',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  },
  tab: {
    flex: 1, height: 50, justifyContent: 'center', alignContent: 'center', backgroundColor: '#e5e5e5'
  },
  tabView: {
    flex: 1, height: 50
  }
})