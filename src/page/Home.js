/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Left, Right, Thumbnail, Icon, Card, CardItem, Body, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import BgImg from '../assets/bg.jpg';
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
      Alert.alert(this.state.activeTab)
    })
  }

  getStyle = (item) => {
    if (item === this.state.activeTab) {
      return StyleSheet.flatten([styles.activeTab, styles.activeColor])
    } else {
      return StyleSheet.flatten([styles.activeTab, styles.inactiveColor])
    }
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
    var accountData = [];
    for (let index = 0; index < 10; index++) {
      accountData.push(
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={require('../assets/bg.jpg')} />
          </Left>
          <Body>
            <Text>SB- Saving A/c </Text>
            <Text note numberOfLines={1}>20194283779</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-arrow-round-forward' />
            </Button>
          </Right>
        </ListItem>
      )
    }
    let activeTab = null;
    if (this.state.activeTab == 'accounts') {
      activeTab = <View style={styles.tabView}>

        <Text style={{ textAlign: 'center', fontSize: 18, color: 'black' }}>Clear Balance [Primary A/c]</Text>
        <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>Rs. 1955.05 Cr.</Text>
        <Text style={{ alignSelf: 'flex-end', fontSize: 14, color: 'red', marginRight: 10, marginBottom: 10 }}>Last Login : 02-Dec-2019 09:08</Text>
        <Container>
          <Content>
            <List>
              {accountData}
            </List>
          </Content>
        </Container>
      </View>
    } else if (this.state.activeTab == 'deposits') {
      activeTab = <View style={styles.tabView} >
        <Text style={styles.centerAlign}>{this.state.activeTab}</Text>
      </View>
    } else if (this.state.activeTab == 'loans') {
      activeTab = <View style={styles.tabView} >
        <Text style={styles.centerAlign}>{this.state.activeTab}</Text>
      </View>
    }


    return (
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
        <Container>
          <Navbar left={left} right={right} title="mobiSharada" />
          <Content>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
              <View style={styles.tabCss}>
                <TouchableOpacity onPress={() => { this.activateTab('accounts') }} style={[(this.state.activeTab === 'accounts') ? styles.activeTab : styles.inactiveTab]}>
                  <Text style={styles.centerAlign} >Accounts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabCss} >
                <TouchableOpacity onPress={() => { this.activateTab('deposits') }} style={[(this.state.activeTab === 'deposits') ? styles.activeTab : styles.inactiveTab]} >
                  <Text style={styles.centerAlign} >Deposits</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabCss}>
                <TouchableOpacity onPress={() => { this.activateTab('loans') }} style={[(this.state.activeTab === 'loans') ? styles.activeTab : styles.inactiveTab]}>
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

let styles = StyleSheet.create({
  centerAlign: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  },
  tabCss: {
    flex: 1, height: 50, justifyContent: 'center', alignContent: 'center'
  },
  activeTab: {
    backgroundColor: '#e5e5e5',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },
  inactiveTab: {
    backgroundColor: 'white',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },

  tabView: {
    flex: 1,
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
    justifyContent: 'center',
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
    resizeMode: 'cover'
  }
})