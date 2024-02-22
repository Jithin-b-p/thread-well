import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hatspage from "./pages/Hatspage.jsx";
import Jacketspage from "./pages/Jacketspage.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import Header from "./ui/Header.jsx";
import Sneakers from "./pages/Sneakerspage.jsx";
import Womenspage from "./pages/Womenspage.jsx";
import Menspage from "./pages/Menspage.jsx";
import Shoppage from "./pages/shop/Shoppage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Signinpage from "./pages/SigninSignuppage.jsx";
import { AuthProvider } from "./contexts/authContext/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="hats" element={<Hatspage />} />
          <Route path="jackets" element={<Jacketspage />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="womens" element={<Womenspage />} />
          <Route path="mens" element={<Menspage />} />
          <Route path="shop" element={<Shoppage />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="signin" element={<Signinpage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
