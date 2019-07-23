import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SubNav from './components/SubNav';

const menuItems = ['mac', 'ipad', 'iphone', 'watch', 'tv', 'music', 'support'];
const subMenu = {
  "mac": ["macbook air", "macbook pro", "imac", "imac pro", "mac pro"],
  "ipad": ["ipad pro", "ipad air", "ipad", "ipad mini", "apple pencil"],
  "iphone": ["iphone xs", "iphone xr", "iphone 8", "iphone 7"],
  "watch": ["apple watch", "Apple watch nike", "apple watch series 3"],
  "tv": ["apple tv app", "apple tv+", "apple tv4k"],
  "music": ["apple music", "itunes", "homepod", "earpods", "airpods", "ipod touch :("],
  "support": ["haha screw you we don't repair our devices."],
}
function App() {
  return (
    <Router>
      <div className="App">
        {menuItems.map(e =>
          <Nav MenuItem={e} SubMenu={subMenu} className="nav" />
        )}
      </div>
      <Route path="/mac" render={props => (<SubNav MenuItem="mac" SubMenu={subMenu} />)} />
      <Route path="/ipad" render={props => (<SubNav MenuItem="ipad" SubMenu={subMenu} />)} />
      <Route path="/iphone" render={props => (<SubNav MenuItem="iphone" SubMenu={subMenu} />)} />
      <Route path="/watch" render={props => (<SubNav MenuItem="watch" SubMenu={subMenu} />)} />
      <Route path="/tv" render={props => (<SubNav MenuItem="tv" SubMenu={subMenu} />)} />
      <Route path="/music" render={props => (<SubNav MenuItem="music" SubMenu={subMenu} />)} />
      <Route path="/support" render={props => (<SubNav MenuItem="support" SubMenu={subMenu} />)} />
    </Router>
  );
}

export default App;
