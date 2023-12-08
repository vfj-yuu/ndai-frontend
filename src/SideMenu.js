import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const StyledListItem = styled(ListItem)({
  "&:hover": {
    cursor: "pointer",
  },
});

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "300px", height: "100%", backgroundColor: "#D0DDEB" }}>
        <List>
          <StyledListItem
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="新しいチャットを開始" />
          </StyledListItem>
        </List>
          <List>
            <StyledListItem
              onClick={() => {
                navigate("/ng-words");
              }}
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="NGワード一覧" />
            </StyledListItem>
          </List>
      </Box>
    </>
  );
}
