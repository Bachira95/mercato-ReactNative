import React, { Component } from "react";

import { TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  };

  render() {
    const { username, password, first_name, last_name } = this.state;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="firstname"
          placeholderTextColor="#A6AEC1"
          value={first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="lastname"
          placeholderTextColor="#A6AEC1"
          value={last_name}
          onChangeText={(last_name) => this.setState({ last_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />

        <TouchableOpacity
          style={styles.authButton}
          onPress={() => this.props.signup(this.state)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN.toString())}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}
export default Signup;