// import Function
import styled from "@emotion/styled";
// import Component
import { Button, IconButton } from "@mui/material";

export const Main = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
});

export const Model = styled("div")({
  position: "absolute",
  top: "50px",
  left: "50%",
  transform: "translate(-50%, 0)",
  display: "flex",
  padding: "5px 10px",
  backgroundColor: "#eeeeee",
  borderRadius: "10px",
});

export const InputMessageField = styled("div")({
  position: "absolute",
  bottom: "0px",
  left: "50%",
  transform: "translate(-50%, 0)",
  height: "150px",
  width: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const SendButton = styled(Button)({
  width: "50px",
  height: "50px",
  margin: "0 25px",
  backgroundColor: "#1B579D",
  color: "white",
  "&:hover": {
    backgroundColor: "#1B579D",
    color: "white",
    transform: "scale(1.1, 1.1)",
  },
});

export const ChatContent = styled("div")({
  position: "absolute",
  top: "100px",
  flex: "1",
  width: "100%",
  height: "70%",
  padding: "0 100px",
  overflowY: "scroll",
});

export const ChatMessageField = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "15px 0",
});

export const ChatMessageIcon = styled("img")({
  width: "50px",
  height: "50px",
  margin: "10px 0 10px 20px",
});

export const ChatMessageText = styled("div")({
  marginLeft: "20px",
  padding: "10px 0",
  width: "90%",
  whiteSpace: "pre-wrap",
});

export const ChatMessageCopy = styled("div")({
  margin: "10px 10px auto auto",
  width: "15px",
  color: "#1b579d",
  cursor: "pointer",
});

export const LoadButton = styled(IconButton)({
  display: "block",
  margin: "15px auto",
});
