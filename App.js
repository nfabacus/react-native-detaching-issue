import React, { Component } from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class App extends Component {
  async createPDF() {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 300}}>
        <TouchableHighlight onPress={this.createPDF}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
