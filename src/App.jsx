import React from 'react'
import Feed from './Pages/Feed/Feed'
import ProductConfig from './Pages/Feed/ProductConfig/ProductConfig'
import { BrowserRouter, Routes, Route } from "react-router"

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/product" element={<ProductConfig />} />
      </Routes>
    </div>
  )
}

export default App