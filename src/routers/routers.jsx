import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from '@/pages'
function Router (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Pages.Home/>}/>
            <Route path="/service"  element={<Pages.Service/>}/>
            <Route path="/contact"  element={<Pages.Contact/>}/>
            <Route path="/about"  element={<Pages.About/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export {Router}