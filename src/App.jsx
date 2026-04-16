import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example1 from './pages/Example1';
import ExampleChat1 from './pages/ExampleChat1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example1 />} />
        <Route path="/chat" element={<ExampleChat1 />} />
      </Routes>
    </Router>
  );
}
export default App;