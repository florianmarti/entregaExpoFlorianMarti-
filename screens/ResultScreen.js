import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../src/components/Card";
import lose from "../assets/images/lose.jpg";
import win from "../assets/images/win.jpg";

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "win") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>{`you ${result}`}</Text>
      </Card>
      <Image style={styles.imageContainer} source={image} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
});
