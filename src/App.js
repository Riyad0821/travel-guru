import React, { createContext, useState } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const PlaceContext = createContext();
export const UserContext = createContext();
const App = () => {
  const [selectedPlace, setSelectedPlace] = useState({
    id: '1111',
            title: 'SREEMANGAL',
            description: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden.',
            imgUrl:'https://i.imgur.com/IHaCZaE.png'
  });
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
     <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <PlaceContext.Provider value={[selectedPlace, setSelectedPlace]}>
     <Router>
         <Switch>
           <Route path="/home">
              <Home></Home>
           </Route>
           <Route path="/login">
              <Login></Login>
           </Route>
           <Route path="/book">
              <Book></Book>
           </Route>
           <PrivateRoute path="/hotel">
              <Hotel></Hotel>
           </PrivateRoute>
           <Route exact path="/">
              <Home></Home>
           </Route>
         </Switch>
     </Router>
    </PlaceContext.Provider>
    </UserContext.Provider>
  );
};

export default App;