import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import '../src/styles/colors.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Router/About";
// import About from "./components/Router/About";
import Reports from "./components/Router/Reports";
import Mocktests from "./components/Router/Mocktests";
import Dashboard from "./components/Router/Dashboard";
import Filter from './components/Router/Filter';
import Cart from './components/Router/Cart';
import Header from "./components/header/header";
import EmployeeBar from "./components/body/TableContent/EmployeeBar/employeeBar";

function App() {

  const [cart, setCart] = useState([]);

  // handler to add employee to cart 
  const handleAddToCart = (employee) => {
    setCart((prevCart) => [...prevCart, employee]);
  };
  return (
    <Router>
      <Header cart={cart} />
      <EmployeeBar state={ } onLengthChange={ } onAddToCart={handleAddToCart} />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/mock-tests' element={<Mocktests />} />
        <Route path='/report' element={<Reports />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default App;
