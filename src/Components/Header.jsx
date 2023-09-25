import "../Style/Header.scss";
import { Tooltip } from "@mui/material";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import donate from "../images/bmc-button.webp";
import logo from "../images/logo.png";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function Header() {
  const colseList = () => {
    document.getElementById("fav-list-child").classList.remove("active");
  };
  // const openList = () => {
  //   document.getElementById("fav-list-child").classList.add("active");
  // };
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      colseList();
    }
  });
  return (
    <section className="header">
      <div className="container">
        <div className="header-btns">
          <Tooltip title="Let's Talk ✨">
            <a
              href="https://youssef-elsheikh-7.github.io/myPortfolio/"
              className="fav-list"
              id="fav-list"
            >
              <img id="logo-45" src={logo} alt="Logo" />
            </a>
            <div className="fav-list-child" id="fav-list-child">
              <button onClick={colseList} className="close-btn">
                <div className="close-container">
                  <div className="leftright"></div>
                  <div className="rightleft"></div>
                  <label className="close">close</label>
                </div>
              </button>
            </div>
          </Tooltip>
          <Tooltip title="Donate For Me 👉🏻👈🏻">
            <div className="donate">
              <a href="https://www.buymeacoffee.com/youssefelsh">
                <img src={donate} alt="buy me a coffee image" />
              </a>
            </div>
          </Tooltip>
        </div>
        <h1 className="header-title">Gradients CSS Tool</h1>
        <p className="description">
          🎨 Gradients CSS Tool is a website that collects beautiful CSS
          Gradient combinations for designers and developers to use in their
          designs project. The website is easy to use and allows users to
          Generate the custom gradient and copy the CSS code for the selected
          gradient with just one click. 💻
        </p>
      </div>
    </section>
  );
}
export default Header;
