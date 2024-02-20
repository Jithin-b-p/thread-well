import Homepage from "./pages/Homepage";
import GlobalStyles from "./styles/GlobalStyles.js";
import Footer from "./ui/Footer.jsx";
import Header from "./ui/Header.jsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
