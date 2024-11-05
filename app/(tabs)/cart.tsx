import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Bettles from "../../assets/images/bettles.svg";
import Lemon from "../../assets/images/lemon.svg";
import Potato from "../../assets/images/pp.svg";
import LottieView from "lottie-react-native";

const Cart = () => {
  const animation = useRef(null);
  const [selectedTab, setSelectedTab] = useState("My Cart");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lemon",
      pricePerKg: 1500,
      quantity: 1,
      image: <Lemon width={100} height={100} />,
    },
    {
      id: 2,
      name: "Potatoes",
      pricePerKg: 1500,
      quantity: 1,
      image: <Potato width={100} height={100} />,
    },
    {
      id: 3,
      name: "Bettles",
      pricePerKg: 1500,
      quantity: 1,
      image: <Bettles width={100} height={100} />,
    },
    {
      id: 4,
      name: "Lemon",
      pricePerKg: 1500,
      quantity: 1,
      image: <Lemon width={100} height={100} />,
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.pricePerKg,
    0
  );

  const isCartEmpty = cartItems.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Toggle */}
      <View style={styles.header}>
        {["My Cart", "Ongoing", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        {selectedTab === "My Cart" && (
          <>
            {isCartEmpty ? (
              <View>
                <LottieView
                  ref={animation}
                  style={styles.lottieView}
                  source={require("../../assets/images/emptyCart.json")}
                  autoPlay
                  loop
                />
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
              </View>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={() => removeItem(item.id)}
                />
              ))
            )}
          </>
        )}
        {selectedTab === "Ongoing" && <Text>Ongoing Orders</Text>}
        {selectedTab === "Completed" && <Text>Completed Orders</Text>}
      </ScrollView>

      {/* Proceed to Payment Button */}
      {selectedTab === "My Cart" && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: N{totalAmount}</Text>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              isCartEmpty && styles.disabledPaymentButton,
            ]}
            disabled={isCartEmpty}
          >
            <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const totalPrice = item.quantity * item.pricePerKg;

  return (
    <View style={styles.cartItem}>
      {/* Cancel Button */}
      <TouchableOpacity onPress={onRemove} style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>×</Text>
      </TouchableOpacity>
      {item.image}
      <View style={{ marginLeft: 40, flex: 1 }}>
        <Text>{item.name}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => onQuantityChange(item.id, "decrease")}
          >
            <Text style={styles.controlButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity} kg</Text>
          <TouchableOpacity
            onPress={() => onQuantityChange(item.id, "increase")}
          >
            <Text style={styles.controlButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemTotalText}>N{totalPrice}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabButton: {
    paddingVertical: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#06572F",
  },
  tabText: {
    fontSize: 16,
    color: "#555",
  },
  activeTabText: {
    color: "#06572F",
    fontWeight: "bold",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  lottieView: {
    width: 350,
    height: 350,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
    position: "relative",
  },
  cancelButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    zIndex: 1,
  },
  cancelButtonText: {
    fontSize: 20,
    color: "#06572F",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  controlButton: {
    fontSize: 20,
    color: "#06572F",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  itemTotalText: {
    fontSize: 16,
    color: "#06572F",
    marginLeft: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#06572F",
  },
  paymentButton: {
    backgroundColor: "#06572F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  disabledPaymentButton: {
    backgroundColor: "#ccc",
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  emptyCartText:{
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#06572F",
    justifyContent: "center",
  }
});
