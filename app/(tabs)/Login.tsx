import { ThemedText } from "@/components/themed-text";
import { useState } from "react";
import { Button, TextInput, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    alert(`Logged in with email: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <LinearGradient
      colors={["#1a319b", "#764ba2"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ThemedText
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#6ecab7",
        }}
      >
        Login
      </ThemedText>

      <Text style={{ color: "white", alignSelf: "flex-start", marginBottom: 5 }}>
        Email
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#ddd"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "100%",
          padding: 10,
          marginBottom: 10,
          color: "white",
        }}
      />

      <Text style={{ color: "white", alignSelf: "flex-start", marginBottom: 5 }}>
        Password
      </Text>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#ddd"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "100%",
          padding: 10,
          marginBottom: 20,
          color: "white",
        }}
      />

      <Button title="Login" onPress={handleLogin} />
    </LinearGradient>
  );
}
