
import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/theme"
import { formHelperTextClasses } from "@mui/material";
import Home from './pages/home';
import Createpost from "./pages/createpost";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from "./components/navbar";
const Container=styled.div`
width:100%;
height:100%;
display:flex
background-color:${({theme})=> theme.bg};
color: ${({theme})=>theme.text_primary};
overflow-x:hidden;
overflow-y:hidden;
transition:all 0.2:
`;

const Wrapper=styled.div`
height:100%
position:relative
display:flex
flex-direction:column
justify-content:space-between
flex:3
`;
function App() {
  return <ThemeProvider theme={darkTheme}>
    <Container>
      <Wrapper>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/post' element={<Createpost />} exact/>
        </Routes>
        </BrowserRouter>
      </Wrapper>
    </Container>
    </ThemeProvider>
}

export default App;
