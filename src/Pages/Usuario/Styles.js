import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
`;

export const ContainerUp = styled.View`
  flex: 1.5;
  flex-direction: row;
  background-color: #a0b1bf;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
`;

export const CameraImage = styled.Image.attrs({
  source: require("../../../Images/camera.png"),
  resizeMode: "contain",
  position: "absolute",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 70%;
  height: 70%;
`;

export const PhotoContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 25px;
  background-color: #a9a9a9;
  flex-direction: row;
  height: 75px;
  width: 75px;
  border-radius: 50px;
`;

export const PicView = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  height: 75px;
  width: 75px;
  border-radius: 50px;
`;
export const Pic = styled.Image`
  height: 75px;
  width: 75px;
  border-radius: 50px;
`;

export const ContainerDown = styled.View`
  flex: 3.7;
  background-color: #f4f6f6;
  flex-direction: column;
`;

export const FirstContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const UsuarioInput = styled.TextInput.attrs({
  placeholderTextColor: "#62676d",
  fontSize: 17,
  fontWeight: "bold",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  width: 320px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
`;

export const OtherInput = styled.TextInput.attrs({
  placeholderTextColor: "#62676d",
  fontSize: 17,
  fontWeight: "bold",
})`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 15px;
  width: 148px;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #62676d;
`;

export const ContinuarButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 320px;
  height: 50px;
  border-radius: 13px;
  margin-top: 60px;
  margin-bottom: 10px;
  background-color: #646d74;
`;
