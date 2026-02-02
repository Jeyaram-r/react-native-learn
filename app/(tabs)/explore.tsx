import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Explore() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [submitted, setSubmitted] = useState(false); // 👈 NEW

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}   // 👈 REQUIRED
        style={{
          borderWidth: 1,
          width: "100%",
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}    // 👈 REQUIRED
        style={{
          borderWidth: 1,
          width: "100%",
          padding: 10,
          marginBottom: 15,
        }}
      />

      <Button
        title="Submit"
        onPress={() => {
          setSubmitted(true);        // 👈 show name only after submit
        }}
      />

      {submitted && (               // 👈 CONDITIONAL RENDER
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Hello, {firstName} {lastName}
        </Text>
      )}
    </View>
  );
}
