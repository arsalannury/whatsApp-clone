import { createTheme, ThemeProvider } from "@mui/material";
import { ChildrenProps } from "../InterFaces/ChildrenInterface";
import React from "react";

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#888",
          width: "100%",
        },
        bar: {
          backgroundColor: "lightgray",
        },
      },
    },
  },
});

const LinearProgressTheme = (props: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <> {props.children}</>
    </ThemeProvider>
  );
};

export default LinearProgressTheme;
