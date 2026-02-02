import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
        Welcome to My App!
      </Text>

      <Text style={{ fontSize: 16, color: "red", marginBottom: 20 }}>
        You’re learning React Native 🚀
      </Text>
      <View
      
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
      }}
      >

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Count: {count}

      </Text>
      <View
      style={{
        marginLeft:20, 
        flexDirection:'row', 
        paddingBottom:10,
        marginRight:20
      }}
      >
      <Button
      
      title="-"
      onPress={()=>setCount(count-1)}
      />
      <Button
      title="+"
      onPress={()=>setCount(count+1)}
      />
      </View>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Add" onPress={() => setCount(count + 1)} />
        <Button  
        title="Reset"
        onPress={()=>setCount(0)}
        />
      </View>

      <Button
        title="Click Me"
        onPress={() => alert("Wow!!! You did it!! 🎉")}
      />
    </View>
  );
}
