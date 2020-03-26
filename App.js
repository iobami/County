import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Appbar, Avatar, Divider, Surface, IconButton, Colors } from 'react-native-paper';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

let counter;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            counting: false,
            timeText: '',
            timerValueArray: [],
            timerValue: '00h 00m 00s',
            timerPlaceholder: [ 0, 0, 0, 0, 0, 0 ],
        };
    }

    _getUserInput(val) {
        if (this.state.timerValueArray.length === 6) return;
        if (val !== '') {
            this.state.timerValueArray.push(val);
            this.state.timerPlaceholder.pop();
            this.state.timerPlaceholder.unshift(val);
            this._formatTimer();
        }
        this.setState({ timeText: '' });
    }

    _formatTimer() {
        this.state.timerValue = `${this.state.timerPlaceholder[5]}${this.state.timerPlaceholder[4]}h ${this.state.timerPlaceholder[3]}${this.state.timerPlaceholder[2]}m ${this.state.timerPlaceholder[1]}${this.state.timerPlaceholder[0]}s`;
    }

    _startTimer() {
        const val = this.state.timerPlaceholder;
        const seconds = parseInt(`${val[1]}${val[0]}`, 10);
        const minutes = parseInt(`${val[3]}${val[2]}`, 10);
        const hours = parseInt(`${val[5]}${val[4]}`, 10);
        let valueToString = seconds + (minutes * 60) + (hours * 3600);

        if (valueToString > 0) {
            this.counter(valueToString);
            this.setState({ counting: true });
        }

    }

    counter(valueToString) {
        counter = BackgroundTimer.setInterval(() => {

            valueToString = valueToString -1;
            const d = Number(parseInt(valueToString, 10));
            let h = Math.floor(d / 3600);
            let m = Math.floor(d % 3600 / 60);
            let s = Math.floor(d % 3600 % 60);
            if (h < 10) {
                h = '0' + h;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (s < 10) {
                s = '0' + s;
            }
            this.setState({ timerValue: `${h}h ${m}m ${s}s` });

            if (d < 0) {
                clearInterval(counter);
                this.setState({
                    timerValue: '00h 00m 00s',
                    timerValueArray: [],
                    timerPlaceholder: [ 0, 0, 0, 0, 0, 0 ]
                });
                this.setState({ counting: false });
                alert('we made it bruhh!');
            }
        }, 1000);
        return counter;
    }

    _clearTimer() {
        clearInterval(counter);
        this.setState({
            timerValue: '00h 00m 00s',
            counting: false,
            timerValueArray: [],
            timerPlaceholder: [ 0, 0, 0, 0, 0, 0 ]
        })
    }

    _clearUserInput() {
        this.state.timerPlaceholder.push(0);
        this.state.timerValueArray.pop();
        this.state.timerPlaceholder.shift();
        this.setState({
            timerPlaceholder: this.state.timerPlaceholder,
        });
        this._formatTimer();
    }

  render() {
    return (
      <View style={{flex: 1}}>

          <Appbar.Header>
              <Appbar.Content
                  title="County"
                  style={styles.header}
              />
              {/*<Avatar.Icon size={24} icon="folder" />*/}
          </Appbar.Header>

        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                <Text style={styles.welcome}>{ this.state.timerValue }</Text>
                <View
                    pointerEvents={this.state.counting ? 'none' : 'auto'}
                    style={{marginTop: 20}}>
                    <IconButton
                        icon="backspace"
                        color={'purple'}
                        size={30}
                        onPress={() => this._clearUserInput()}
                    />
                </View>
            </View>
            <Divider style={styles.test} />
            {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        </View>

          <View style={{flex: 3}}>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(1)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>1</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(2)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>2</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(3)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>3</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(4)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>4</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(5)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>5</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(6)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>6</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(7)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>7</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(8)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>8</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(9)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>9</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                  <TouchableHighlight
                      underlayColor="white"
                      onPress={() => {
                          this._getUserInput(0)
                      }}
                  >
                      <View>
                          <Surface style={styles.surface}>
                              <Text>0</Text>
                          </Surface>
                      </View>
                  </TouchableHighlight>
              </View>

              {
                  (this.state.counting === false)
                      ?
                      <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                          <IconButton
                              icon="play"
                              color={Colors.red500}
                              size={45}
                              onPress={() => this._startTimer()}
                          />
                      </View>
                      :
                      <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                          <IconButton
                              icon="pause"
                              color={Colors.red500}
                              size={45}
                              onPress={() => this._clearTimer()}
                          />
                      </View>
              }
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    test: {
      backgroundColor: 'red',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // height: 1000,
  },
  header: {
    marginLeft: 35,
    // backgroundColor: 'red',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  surface: {
      padding: 8,
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 6,
  },
});
