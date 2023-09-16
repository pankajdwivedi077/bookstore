import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <SnackbarProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </SnackbarProvider>
  </Router>
)
