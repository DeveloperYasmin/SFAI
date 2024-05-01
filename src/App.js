import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/about";
import Body from "./components/Body";
import Sponsorship from "./components/sponsorship";
import Travel from "./components/travel"
import Faq from "./components/faq"
import Contact from "./components/contactus"


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
        {
            path:"/travel",
            element:<Travel/>
        
        },
        {
            path:"/faq",
            element:<Faq/>
        
        },
        {
            path:"/contactus",
            element:<Contact/>
        
        },
           
    ],

},])
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)


}
export default App