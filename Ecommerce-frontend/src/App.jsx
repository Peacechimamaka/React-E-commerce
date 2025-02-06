import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import { useState } from "react"
import Order from "./Pages/order"

function App() {
  const [order, setOrder] = useState({
    orderNumber: "",
    shippingInformation: { address: "", city: "", zip: "" },
    products: [],
    totalPrice: 0
});
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/shop' element={<Shop />}> </Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}> </Route>
        <Route path='/order-confirmation' element={<Order order={order}/>}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
