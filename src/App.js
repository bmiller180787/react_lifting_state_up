import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Button from "./Components/Footer/Button";
import {useState} from "react";

const App = () => {
    const [loggedIn, setLogged In] = useState(false)

  return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
  )
}

export default App;
