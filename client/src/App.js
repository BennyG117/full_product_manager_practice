import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Edit from './views/Edit'
import New from './views/New'
import Error from './views/Error'
import ViewOne from './views/ViewOne';

//TODO: determine issue where url routes based on localhost:3000 instead of port 8080 

function App() {
  return (
    <div className="App">

    <h1>Product Manager</h1>

    <Link to={"/"}>Dashboard</Link>
      |
      <Link to={"/new"}>Add a Product</Link>

      <Routes>
        {/* may want to remove closing tags below: */}
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/new" element={<New/>}></Route>

        <Route path="/viewOne/:id" element={<ViewOne/>}></Route>

        <Route path="/edit/:id" element={<Edit/>}></Route>
        <Route path="*" element={<Error/>}/>

      </Routes>


    </div>
  );
}

export default App;
