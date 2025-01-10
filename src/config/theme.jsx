import createTheme from '@mui/material/styles/createTheme'

let theme = createTheme({
    palette:{
        primary: {
            main: '#158A37',
        },
        secondary: {
            main: '#FF5000'
        },
        // darkBlue: createColor('#000541')
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
})
  

export default theme