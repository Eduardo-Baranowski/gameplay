import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View, Image } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";



export function GuildIcon() {
  const uri = 'https://miro.medium.com/max/1024/0*E3Nphq-iyw_gsZFH.png';
  return(
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
    
  );
}
