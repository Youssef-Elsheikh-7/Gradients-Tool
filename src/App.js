import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Gradients from "./Components/Gradients";
import Genetator from "./Components/Genetator";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {(() => {
        if (!loader) {
          return <Loader />;
        } else {
          return (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Gradients />} />
                <Route path="/generate" element={<Genetator />} />
              </Routes>
              <Footer />
            </>
          );
        }
      })()}
    </div>
  );
}

export default App;
// #0d1117
// #000000
