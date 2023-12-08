import React from "react";
import { SendButton, InputMessageField, Main, Model } from "./export/component";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";

export default function NewChat() {
  const [inputMessage, setInputMessage] = React.useState("");

  const handleClickSendButton = () => {
  };

  return (
    <>
      <Main>
        <Model>GPT - 3.5</Model>
        <InputMessageField>
          <TextField
            value={inputMessage}
            multiline
            maxRows={4}
            onInput={(event) => {
              setInputMessage(event.target.value);
            }}
            sx={{ width: "60%" }}
          />
          <SendButton onClick={handleClickSendButton}>
            <SendIcon />
          </SendButton>
        </InputMessageField>
      </Main>
    </>
  );
}
