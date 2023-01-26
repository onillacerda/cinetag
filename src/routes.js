import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
        </Routes>
        </BrowserRouter>
    )
}