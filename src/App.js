import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import { createHashRouter, RouterProvider,Outlet } from "react-router-dom";
import MainContent from "./components/MainContent";
import About from "./components/about";
import Body from "./components/Body";


function App(){
    
const AppLayout =() =>{    
    return(
<div>        
        <Outlet/>
        </div>
        )
};  

const appRouter=createHashRouter([
{
    path:"/",
    element:<AppLayout/>,
    children:[
       
      {
        path:"/",
        element:<Body/>
    
    },
    {
            path:"/about",
            element:<About/>
        
        },
           
    ],

},])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)


}
export default App