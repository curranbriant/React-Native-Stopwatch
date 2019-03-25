import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.addIt = this.addIt.bind(this);
  }
  handleStart() {
    this.setState({
      count: this.state.count,
    });
    this.Stopwatch = setInterval(this.addIt, 1000);
  }

  addIt() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleReset() {
    this.setState({
      count: 0.0,
    });
    clearInterval(this.Stopwatch);
  }
  handlePause() {
    this.setState({
      count: this.state.count,
    });
    clearInterval(this.Stopwatch);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            marginTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 200 }}>
            {this.state.count}
          </Text>
          <TouchableHighlight onPress={this.handleStart}>
            <Text
              style={{
                paddingLeft: 7,
                fontSize: 20,
                marginTop: 10,
                backgroundColor: '#f3ffc6',
                padding: 5,
                borderRadius: 5,
                width: 60,
                alignItems: 'center',
              }}
            >
              Start
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handlePause}>
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 20,
                marginTop: 10,
                backgroundColor: '#f3ffc6',
                padding: 5,
                borderRadius: 5,
                width: 90,
                alignItems: 'center',
              }}
            >
              Pause
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleReset}>
            <Text
              style={{
                paddingLeft: 30,
                fontSize: 20,
                marginTop: 10,
                backgroundColor: '#f3ffc6',
                padding: 5,
                borderRadius: 5,
                width: 120,
                alignItems: 'center',
              }}
            >
              Reset
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
