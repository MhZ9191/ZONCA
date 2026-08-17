import { useState } from "react";
import "./assets/css/App.css";
import { products } from "./assets/data/Data";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import Jobpage from "./pages/JobPage";
import DetailProductPage from "./pages/DetailProductPage";
import PressPage from "./pages/PressPage";
import SpacesPage from "./pages/SpacesPage";
import DetailSpacePage from "./pages/DetailSpacePage";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/ZONCA">
        <Routes>
          <Route index element={<HomePage></HomePage>} />

          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route path="/home" element={<MainPage></MainPage>} />
            <Route path="/products" element={<ProductPage></ProductPage>} />
            <Route path="/about" element={<AboutPage></AboutPage>} />
            <Route path="/job" element={<Jobpage></Jobpage>} />
            <Route path="/press" element={<PressPage></PressPage>} />
            <Route path="/spaces" element={<SpacesPage></SpacesPage>} />
            <Route
              path="/products/:slug"
              element={<DetailProductPage></DetailProductPage>}
            />
            <Route
              path="/spaces/:slug"
              element={<DetailSpacePage></DetailSpacePage>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
