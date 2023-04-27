import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Button from "./Components/Footer/Button";
import {useState} from "react";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

  return (
      <>
        <Header loggedIn={loggedIn} />
        <Content />
        <Footer />
      </>
  )
}

export default App;
