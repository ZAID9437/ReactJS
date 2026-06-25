import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home "
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Nav from "./Componentes/Nav"
import Product from "./Pages/Product"


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App

// React Router me commonly 3 main types of routes use hote hain:

// 1. Static Route

// Fixed path hota hai.

// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />

// Example:

// /
// /about
// 2. Dynamic Route

// URL me parameter pass karte hain.

// <Route path="/product/:id" element={<Product />} />

// Example:

// /product/1
// /product/25

// Parameter access:

// import { useParams } from "react-router-dom";

// const { id } = useParams();
// 3. Nested Route

// Ek route ke andar dusra route.

// <Route path="/dashboard" element={<Dashboard />}>
//   <Route path="profile" element={<Profile />} />
//   <Route path="settings" element={<Settings />} />
// </Route>

// Example:

// /dashboard/profile
// /dashboard/settings
// Other Important Route Types
// Index Route
// <Route index element={<Home />} />

// Default child route.

// Protected Route

// Login ke baad hi access.

// <Route
//   path="/admin"
//   element={isLoggedIn ? <Admin /> : <Login />}
// />
// Wildcard (404) Route
// <Route path="*" element={<NotFound />} />

// Agar koi route match na ho to 404 page show karega.

// Summary
// Route Type	Example
// Static Route	/about
// Dynamic Route	/product/:id
// Nested Route	/dashboard/profile
// Index Route	Default child route
// Protected Route	Login required
// Wildcard Route	* (404 page)