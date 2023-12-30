import React from "react";
import { Pressable, SafeAreaView, View, Image } from "react-native";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Image source={{ uri: "" }} />
        <Pressable />
      </View>
    </SafeAreaView>
  );
}

export default App;
