/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component, StyleSheet } from 'react';
import { ScrollView, LayoutAnimation, UIManager, Linking, Image, Dimensions } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Icon, Item, Input, Button, Grid, Col, Container, Header, Content, Card, CardItem, CardSwiper, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import SideMenuSecondLevel from './SideMenuSecondLevel';
import Text from './Text';
import BgImg from '../assets/jjit.jpg';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchError: false,
      subMenu: false,
      subMenuItems: [],
      clickedItem: ''
    };

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderMenu()}
      </ScrollView>
    );
  }

  renderMenu() {
    if (!this.state.subMenu) {
      return (
        <View style={{ borderRightColor: 'gray', borderRightWidth: 1, shadowOffset: { width: 0, height: 2 } }}>
          <View >
            <Image style={styles.image} source={BgImg} />
            <View style={styles.overlay} />
            <View style={styles.border} >
              <Text style={styles.title}>jMobile</Text>
              <Text>{`\n`}</Text>
              <Text style={styles.subtitle}>Jalagon Janata Infotech Pvt. Ltd. </Text>
              <Text>{`\n`}</Text>
              <Text style={styles.subtitleBottom}>www.jjit.net</Text>
            </View>
          </View>
          <View style={{ paddingRight: 15 }}>
            <List>

              {this.renderMenuItems()}
            </List>
          </View>
          <View style={styles.line} />
          <View style={{ paddingRight: 15 }}>
            <List>
              {this.renderSecondaryList()}
            </List>
          </View>
          <View style={styles.line} />
          <View style={{ paddingRight: 15, paddingLeft: 15 }}>
            <Text style={{ textAlign: 'center' }}>Powered By @JJIT</Text>
          </View>
        </View>
      );
    }
    else {
      return (
        <SideMenuSecondLevel back={this.back.bind(this)} title={this.state.clickedItem} menu={this.state.subMenuItems} />
      );
    }
  }

  renderMenuItems() {
    let items = [];
    menuItems.map((item, i) => {
      items.push(
        <ListItem
          last={menuItems.length === i + 1}
          icon
          key={item.id}
          button={true}
          onPress={() => this.itemClicked(item)}
        >
          <Body>
            <Text>{item.title}</Text>

          </Body>

        </ListItem>
      );
    });
    return items;
  }

  itemClicked(item) {
    if (!item.subMenu || item.subMenu.length <= 0) {
      Actions.category({ id: item.id, title: item.title });
      return;
    }
    var animationConfig = {
      duration: 150,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ subMenu: true, subMenuItems: item.subMenu, clickedItem: item.title });
  }

  back() {
    var animationConfig = {
      duration: 150,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ subMenu: false, subMenuItems: [], clickedItem: '' })
  }

  search(text) {
    if (this.state.search.length <= 2)
      this.setState({ searchError: true, search: "" });
    else
      Actions.search({ searchText: this.state.search });
  }

  renderSecondaryList() {
    let secondaryItems = [];
    menusSecondaryItems.map((item, i) => {
      secondaryItems.push(
        <ListItem
          last
          icon
          key={item.id}
          button={true}
          onPress={Actions[item.key]}
        >
          <Left>
            <Icon style={{ fontSize: 18 }} name={item.icon} />
          </Left>
          <Body style={{ marginLeft: -15 }}>
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </Body>

        </ListItem>
      );
    });
    return secondaryItems;
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  text: {
    width: 300,
    height: 200,

  },
  subtitle: {
    color: 'white',
    fontSize: 17
  },
  subtitleBottom: {
    color: 'white',
    fontSize: 13,
    textAlign: 'right',
    bottom: 0,
    alignSelf: 'flex-end'
  },
  image: {
    height: 200,
    width: null,
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
    color: 'white',
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
};

var menuItems = [];

//const menusSecondaryItems = [];

const menusSecondaryItems = [
  {
    id: 190,
    title: 'My Profile',
    icon: 'ios-person',
    key: 'home'
  },
  {
    id: 519,
    title: 'Accounts',
    icon: 'ios-person-add',
    key: 'signup'
  },
  {
    id: 19,
    title: 'Fund Transfer',
    icon: 'heart',
    key: 'wishlist'
  },
  {
    id: 20,
    key: 'map',
    title: 'Request',
    icon: 'ios-pin',
    key: 'map'
  },
  {
    id: 21,
    key: 'contact',
    title: 'Features',
    icon: 'md-phone-portrait',
    key: 'contact'
  },
  {
    id: 23,
    key: 'newsletter',
    title: 'Deposite Calculator',
    icon: 'md-paper',
    key: 'newsletter'
  },
  {
    id: 24,
    key: 'contact',
    title: 'EMI Calculator',
    icon: 'md-phone-portrait',
    key: 'contact'
  },
  {
    id: 25,
    key: 'newsletter',
    title: 'Change mPin',
    icon: 'md-paper',
    key: 'newsletter'
  }
];

