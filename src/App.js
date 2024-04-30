import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/about";
import Body from "./components/Body";
import Sponsorship from "./components/sponsorship";


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
        {
            path:"/sponsorship",
            element:<Sponsorship/>
        
        },
           
    ],

},])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)


}
export default App