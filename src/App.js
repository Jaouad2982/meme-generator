import React from "react"
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import "./App.css"

const App = () => {
  return (
    <div className="app-content">
      <Header />
      <MainContent />
    </div>
  )
}

export default App