import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const pgSize = 6;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News category="general" p={pgSize} img="/general1.jpg"/>} />
          <Route exact path="/business" element={<News category="business" p={pgSize} img="/business5.jpeg"/>} />
          <Route exact path="/sports" element={<News category="sports" p={pgSize} img="/sports1.jpg"/>} />
          <Route exact path="/entertainment" element={<News category="entertainment" p={pgSize} img="/entertainment.jpg"/>} />
          {/* <Route exact path="/general" element={<News category="general" p={pgSize} img="/business5.jpeg"/>} /> */}
          <Route exact path="/technology" element={<News category="technology" p={pgSize} img="/tech1.jpg"/>} />
          <Route exact path="/health" element={<News category="health" p={pgSize} img="/health.jpg"/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App