import React, { useState } from "react";
import { RefreshControl, ScrollView, StatusBar, Text } from "react-native";
import { styles } from "./styles";
import { StatusBarStyle } from "react-native";

const Lab4_2 = () => {
  const styleTypes =['default', 'dark-content', 'light-content']
  const [barStyle, setBarStyle] = useState(styleTypes[1]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setBarStyle(styleTypes[2]);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={'transparent'}
      />
      <Text style={styles.text}>Kéo xuống để đổi màu Statusbar</Text>
    </ScrollView>
  );
};

export default Lab4_2;
