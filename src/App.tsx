import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from './pages/contact/Contact';
import Localiation from './pages/localisation/Localisation';
import Main from './pages/main/main';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarMenu from './components/navbar/Navbar';
 
const App: React.FC = () => {
    return ( 
        <BrowserRouter>
            <NavbarMenu />
            <Switch>
               <Route path="/" exact component={Main} /> 
               <Route path="/localisation" exact component={Localiation} /> 
               <Route path="/contact" exact component={Contact} /> 
            </Switch>
        </BrowserRouter>
     );
}
 
export default App;