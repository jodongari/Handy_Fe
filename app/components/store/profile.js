import React from "react";
import { Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";


const Avatar = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <View>
      {imageUrl ? (
        <Image></Image>
      ) : (
        <Image
          source={require("../../assets/images/good.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

interface Props {
  userName?: string;
  userProfileImage?: string;
}


const Profile = ({ userName, userProfileImage }: Props) => {
  // const AvatarWrapper =

  return (
    <View>
      <View style={styles.rootContainer}>
        <View style={styles.avatarContainer}>
          <Avatar imageUrl={userProfileImage} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{userName}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
            }}>
              <Text style={styles.buttonLabel}>계정 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, ...{ marginLeft: 8 } }} onPress={() => {
            }}>
              <Text style={styles.buttonLabel}>사업자 관리</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: 'white'
  },
  avatarContainer: {
    paddingVertical: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  infoText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 3,
    flexDirection: "row",
  },
  button: {
    paddingVertical: 5,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 13,
    textDecorationLine: "underline",
    color: "#666666",
  },
  divider: {
    width: "100%",
    height: 10,
    backgroundColor: "#efefef",
  },
});

export default Profile;
