/**
 * This is the Home page
 *
 * @format
 */

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  View,
  Button,
  Left,
  Right,
  Thumbnail,
  Icon,
  Card,
  CardItem,
  Body,
  List,
  ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-simple-modal';
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
      activeTab: 'accounts',
      open: false
    };
  }
  activateTab = tab => {
    this.setState(
      {
        activeTab: tab
      },
      () => {}
    );
  };
  modalDidOpen = () => console.log('Modal did open.');
  modalDidClose = () => {
    this.setState({
      open: false
    });
    console.log('Modal did close.');
  };
  moveUp = () =>
    this.setState({
      offset: -100
    });
  resetPosition = () =>
    this.setState({
      offset: 0
    });
  openModal = () =>
    this.setState({
      open: true
    });
  closeModal = () =>
    this.setState({
      open: false
    });
  getDepositsList = () => {
    let depositsData = [];
    for (let index = 0; index < 20; index++) {
      depositsData.push(
        <ListItem
          thumbnail
          key={index}
          style={{ backgroundColor: '#fbfff7', paddingBottom: 2, width: 375 }}>
          <Body>
            <TouchableOpacity onPress={this.openModal}>
              <Text>TD- Term Deposits A/c {index} </Text>
              <Text note numberOfLines={1}>
                20194283779
              </Text>
            </TouchableOpacity>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.openModal}>
              <Button transparent>
                <Icon name="ios-arrow-round-forward" />
              </Button>
            </TouchableOpacity>
          </Right>
        </ListItem>
      );
    }
    return depositsData;
  };
  getAccountsList = () => {
    let accountData = [];

    for (let index = 0; index < 20; index++) {
      accountData.push(
        <ListItem
          thumbnail
          key={index}
          style={{ backgroundColor: '#fbfff7', paddingBottom: 2, width: 375 }}>
          <Body>
            <TouchableOpacity onPress={this.openModal}>
              <Text>SB- Saving A/c {index} </Text>
              <Text note numberOfLines={1}>
                20194283779
              </Text>
            </TouchableOpacity>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.openModal}>
              <Button transparent>
                <Icon name="ios-arrow-round-forward" />
              </Button>
            </TouchableOpacity>
          </Right>
        </ListItem>
      );
    }
    return accountData;
  };
  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name="ios-menu" />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name="ios-power" />
        </Button>
      </Right>
    );
    let accountData = this.getAccountsList();
    let depositsData = this.getDepositsList();
    let activeTab = null;
    if (this.state.activeTab == 'accounts') {
      activeTab = (
        <View style={styles.tabView}>
          <Text style={styles.textColorTitle}>Clear Balance [Primary A/c]</Text>
          <Text style={styles.textColorTitle}>Rs. 1955.05 Cr.</Text>
          <List style={{ marginBottom: 20 }}>{accountData}</List>
        </View>
      );
    } else if (this.state.activeTab == 'deposits') {
      activeTab = (
        <View style={styles.tabView}>
          <List style={{ marginBottom: 20 }}>{depositsData}</List>
        </View>
      );
    } else if (this.state.activeTab == 'loans') {
      activeTab = (
        <View style={styles.tabView}>
          <Text style={styles.textColorTitle}>Clear Balance [Primary A/c]</Text>
          <Text style={styles.textColorTitle}>Rs. 1955.05 Cr.</Text>
        </View>
      );
    }
    return (
      <SideMenuDrawer ref={ref => (this._sideMenuDrawer = ref)}>
        <Container>
          <Navbar left={left} right={right} title="mobiSharada" />
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
          <Content>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
              <View style={styles.tabCss}>
                <TouchableOpacity
                  onPress={() => {
                    this.activateTab('accounts');
                  }}
                  style={[
                    this.state.activeTab === 'accounts' ? styles.activeTab : styles.inactiveTab
                  ]}>
                  <Text style={styles.centerAlign}>Accounts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabCss}>
                <TouchableOpacity
                  onPress={() => {
                    this.activateTab('deposits');
                  }}
                  style={[
                    this.state.activeTab === 'deposits' ? styles.activeTab : styles.inactiveTab
                  ]}>
                  <Text style={styles.centerAlign}>Deposits</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabCss}>
                <TouchableOpacity
                  onPress={() => {
                    this.activateTab('loans');
                  }}
                  style={[
                    this.state.activeTab === 'loans' ? styles.activeTab : styles.inactiveTab
                  ]}>
                  <Text style={styles.centerAlign}>Loans</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>{activeTab}</View>
          </Content>
          {this.state.activeTab === 'accounts' && (
            <Modal
              offset={this.state.offset}
              open={this.state.open}
              modalDidOpen={this.modalDidOpen}
              modalDidClose={this.modalDidClose}>
              <View style={{ height: 250 }}>
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../assets/jjit.jpg')}
                        style={{ height: 50, width: 50 }}
                      />
                      <Body>
                        <Text style={[...styles.textColor, { fontSize: 23 }]} note>
                          mobiSharada
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    {/*<Image source={require('../assets/bg.jpg')} style={{ flex: 1}}/>*/}
                    <View style={{ paddingLeft: 20, paddingRight: 20, height: 90 }}>
                      <Text style={[...styles.textColor, { fontSize: 16, paddingBottom: 10 }]}>
                        Transaction Reference No : 1234543356786546
                      </Text>
                      <Text style={[...styles.textColor, { fontSize: 16 }]}>
                        Available Balance : 1935.05
                      </Text>
                    </View>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Button transparent onPress={this.closeModal}>
                        <Text> OK</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              </View>
            </Modal>
          )}
          {this.state.activeTab === 'deposits' && (
            <Modal
              offset={this.state.offset}
              open={this.state.open}
              modalDidOpen={this.modalDidOpen}
              modalDidClose={this.modalDidClose}>
              <View>
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../assets/jjit.jpg')}
                        style={{ height: 50, width: 50 }}
                      />
                      <Body>
                        <Text style={[...styles.textColor, { fontSize: 23 }]} note>
                          jMobile
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    {/*<Image source={require('../assets/bg.jpg')} style={{ flex: 1}}/>*/}
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                      <Text style={{ textAlign: 'center', width: 300, fontSize: 20 }}>
                        Contract Details
                      </Text>
                      <ListItem
                        thumbnail
                        key={0}
                        style={{ backgroundColor: '#fbfff7', paddingBottom: 2 }}>
                        <Body>
                          <Text style={styles.textFormat}>Reciept Date </Text>
                          <Text note numberOfLines={1}>
                            30-30-2016
                          </Text>
                        </Body>
                        <Right>
                          <Text style={styles.textFormat}>Reciept Amount </Text>
                          <Text note numberOfLines={1}>
                            10074.00
                          </Text>
                        </Right>
                      </ListItem>
                      <ListItem
                        thumbnail
                        key={1}
                        style={{ backgroundColor: '#fbfff7', paddingBottom: 2 }}>
                        <Body>
                          <Text style={styles.textFormat}>Reciept Type </Text>
                          <Text note numberOfLines={1}>
                            Periodic Deposite
                          </Text>
                        </Body>
                        <Right>
                          <Text style={styles.textFormat}>Reciept Period </Text>
                          <Text note numberOfLines={1}>
                            36 Months
                          </Text>
                        </Right>
                      </ListItem>
                      <ListItem
                        thumbnail
                        key={2}
                        style={{ backgroundColor: '#fbfff7', paddingBottom: 2 }}>
                        <Body>
                          <Text style={styles.textFormat}>Maturiy Date </Text>
                          <Text note numberOfLines={1}>
                            30-03-2019
                          </Text>
                        </Body>
                        <Right>
                          <Text style={styles.textFormat}>Maturiy Amount </Text>
                          <Text note numberOfLines={1}>
                            13648.00
                          </Text>
                        </Right>
                      </ListItem>
                    </View>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Button transparent onPress={this.closeModal}>
                        <Text> OK</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              </View>
            </Modal>
          )}
        </Container>
      </SideMenuDrawer>
    );
  }
  renderCategories() {
    let cat = [];
    for (var i = 0; i < categories.length; i++) {
      cat.push(
        <CategoryBlock
          key={categories[i].id}
          id={categories[i].id}
          image={categories[i].image}
          title={categories[i].title}
        />
      );
    }
    return cat;
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
    resizeMode: 'cover'
  }
});
