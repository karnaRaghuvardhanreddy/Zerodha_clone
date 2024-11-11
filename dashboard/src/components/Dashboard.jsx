import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Orders from "./Orders";
import Holdings from "./Holdings";

import {Route,Routes } from "react-router-dom"
const Dashboard=()=>{
    return (
        <div className="dashboard-container">
            <WatchList/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary/>}></Route>
                    <Route path="/orders" element={<Orders/>}></Route>
                    <Route path="/holdings" element={<Holdings/>}></Route>
                    <Route path="/positions" element={<Positions/>}></Route>
                    <Route path="/funds" element={<Funds/>}></Route>
                    <Route path="/apps" element={<Apps/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard;