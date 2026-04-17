import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example1 from './pages/Example1';
import ExampleChat1 from './pages/ExampleChat1';
import Example2 from './pages/Example2';
import ExampleChat2 from './pages/ExampleChat2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example1/chat" element={<ExampleChat1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/example2/chat" element={<ExampleChat2 />} />
      </Routes>
    </Router>
  );
}
export default App;