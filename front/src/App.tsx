import './App.css'
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/Main";
import { Loader } from "@/components/Loader";
import { LoginPage } from "@/pages/Login";

function App() {
  return (
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Suspense>
  )
}

export default App
