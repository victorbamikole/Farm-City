import React, { useContext, Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { AuthContext } from "@/components/context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NetInfo from "@react-native-community/netinfo";

const errorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    static contextType = AuthContext;
    state = {
      error: null,
      show: false,
      errorDisplayMessage: "Something went wrong!",
    };
    logUserOut = async () => {
      await AsyncStorage.clear(); // to clear the token
      this.context.signOut(); //context signout
    };
    componentDidMount() {
      const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        console.log("======== network state", state, offline);
        this.setState({ show: offline });
      });
      this.reqInterceptors = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptors = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          console.log("error message", error.response.data);
          this.setState({ error: error });
          if (error.response.status === 401) {
            console.log("logging out");
            this.logUserOut();
          }
        }
      );
      return () => removeNetInfoSubscription();
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }
    removeErrorHandler = () => {
      this.setState({ error: null });
    };
    render() {
      const { signOut } = this.context;
      return (
        <>
          <Modal
            onBackdropPress={() => this.setState({ error: false })}
            isVisible={this.state.error}
          >
            <View style={styles.modalContainer}>
              <Text
                style={styles.modalText}
                onPress={() => this.setState({ error: false })}
              >
                {this.state.error
                  ? this.state.error.response.data.message ||
                    this.state.error.response.data.customMessage ||
                    this.state.errorDisplayMessage
                  : this.state.errorDisplayMessage}
              </Text>
            </View>
          </Modal>
          <Modal
            onBackdropPress={() => this.setState({ show: false })}
            isVisible={this.state.show}
            style={styles.networkModal}
            animationInTiming={600}
          >
            <View style={styles.networkModalContainer}>
              <Text style={styles.networkModalTitle}>Connection Error</Text>
              <Text style={styles.networkModalText}>
                Oops! Looks like your device is not connected to the Internet.
              </Text>
            </View>
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(34, 45, 51, 1)",
  },
  //
  networkModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  networkModalContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  networkModalTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  networkModalText: {
    fontSize: 18,
    color: "rgba(34, 45, 51, 1)",
    marginTop: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default errorHandler;
