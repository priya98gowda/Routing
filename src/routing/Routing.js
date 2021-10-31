import {  Route, Link } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Routing.css'

const routing = (
    <div>
        <nav className="container-fluid" id="container">
            <div id="home">
                <Link to="/"><button className="btn" id="btn1">Home</button></Link>
            </div>
            <div id="login"> 
             <Link to="/login"><button className="btn" id="btn2">Login</button></Link>
            </div>
        </nav>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={Register}/>
    </div>
)

export default routing