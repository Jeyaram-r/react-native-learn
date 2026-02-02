import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Explore() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");

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
      {submittedFirstName !== "" && (
        <Text style={{ marginBottom: 50, fontSize: 18 , fontWeight: "bold"}}>
          Hello, {submittedFirstName} {submittedLastName}
        </Text>
      )}
      <Text 
      style={{ alignSelf: "flex-start", marginBottom: 5 , fontSize:16, fontWeight:'bold'}}
      >First Name:</Text>
      <TextInput
        // label="First Name"
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={{
          borderWidth: 1,
          width: "100%",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Text
      
      style={{ alignSelf: "flex-start", marginBottom: 5 , fontSize:16, fontWeight:'bold'}}
      >Last Name:</Text>
      <TextInput
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}
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
    if (!firstName || !lastName) {
      alert("Please enter both first and last name");
      return;
    }

    setSubmittedFirstName(firstName);
    setSubmittedLastName(lastName);

    // Clear inputs
    setFirstName("");
    setLastName("");
  }}
      />

      
    </View>
  );
}
