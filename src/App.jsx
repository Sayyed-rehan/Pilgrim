import React from 'react'
import Feed from './Pages/Feed/Feed'
import ProductConfig from './Pages/Feed/ProductConfig/ProductConfig'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/task2" element={<ProductConfig />} />
      </Routes>
    </div>
  )
}

export default App