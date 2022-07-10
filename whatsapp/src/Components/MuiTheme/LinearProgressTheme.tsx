import {createTheme,ThemeProvider} from '@mui/material';
import {Props} from '../InterFaces/ChildrenInterface';
import React from 'react';

const theme = createTheme({
   components :{
    MuiLinearProgress : {
        styleOverrides : {
            root : {
                backgroundColor : "#333"
            }
        }
    }
   }
})


const LinearProgressTheme = (props :  Props) => {
 return (
    <ThemeProvider theme={theme}>
   <> {props.children}</>
    </ThemeProvider>
 )
}

export default LinearProgressTheme;