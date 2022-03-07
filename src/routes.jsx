import React from 'react';
import Login from "./Login";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage"
import NotFound from "./pages/NotFound/notFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;