import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Button from "./Components/Footer/Button";
import {useState} from "react";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const toggleLoggedIn = () => {
        setLoggedIn(!loggedIn)
    }

  return (
      <>
        <Header loggedIn={loggedIn} />
        <Content />
        <Footer loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn()} />
      </>
  )
}

export default App;
