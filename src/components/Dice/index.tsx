import React, { useMemo, useState } from "react";
import {
  Pressable,
  Image,
  Text,
  PressableProps,
  ImageProps,
  StyleSheet,
  Vibration,
} from "react-native";

export function Dice() {
  const [diceNumber, setDiceNumber] = useState(6);

  const handleDiceRollPress: PressableProps["onPress"] = () => {
    Vibration.vibrate(300);
    setDiceNumber(() => {
      return Math.floor(Math.random() * 6 + 1);
    });
  };

  const diceImage = useMemo<ImageProps["source"]>(() => {
    let image = require("../../../assets/6.png");
    switch (diceNumber) {
      case 1:
        image = require("../../../assets/1.png");
        break;
      case 2:
        image = require("../../../assets/2.png");
        break;
      case 3:
        image = require("../../../assets/3.png");
        break;
      case 4:
        image = require("../../../assets/4.png");
        break;
      case 5:
        image = require("../../../assets/5.png");
        break;
    }
    return image;
  }, [diceNumber]);
  return (
    <>
      <Image source={diceImage} style={styles.diceImage} />
      <Pressable onPress={handleDiceRollPress} style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Roll</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    height: 200,
    width: 200,
  },
  actionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "#01CBC6",
    borderColor: "#2F363F",
  },
  actionBtnText: {
    fontSize: 24,
  },
});
