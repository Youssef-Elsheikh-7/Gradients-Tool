import { Link } from "react-router-dom";
import "../Style/Generator.scss";
import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import Loader from "./Loader";
function Genetator() {
  const [arrOfColors, setArrOfColors] = useState(["#9796f0", "#fbc7d4"]);
  const [degValue, setDegValue] = useState(90);

  const addNewColor = () => {
    let newColor = document.createElement("input");
    newColor.setAttribute("type", "color");
    newColor.setAttribute("id", "input-color");
    document.querySelector(".input-colors").appendChild(newColor);
    addEventToInput();
  };

  const removeColor = () => {
    if (document.querySelectorAll(".input-colors input").length >= 3) {
      document.querySelector(".input-colors").lastElementChild.remove();
    }
  };
  const createMyGradient = () => {
    let colors = [];
    document
      .querySelectorAll(".input-colors #input-color")
      .forEach((e, index) => {
        e.getAttribute("value", arrOfColors[index]);
        colors.push(e.value);
      });
    setArrOfColors([...colors]);
    setDegValue(
      document.getElementById("deg-val").value === ""
        ? degValue
        : document.getElementById("deg-val").value
    );
  };

  const addEventToInput = () => {
    document.querySelectorAll(".input-colors #input-color").forEach((e) => {
      e.addEventListener("input", createMyGradient);
    });
  };

  const copeid = () => {
    let gradientCode = `background-image: linear-gradient(${degValue}deg,${arrOfColors.join(
      ","
    )});`;
    navigator.clipboard.writeText(gradientCode);
    toast("Copied!", {
      icon: "🎉",
    });
  };

  useEffect(() => {
    addEventToInput();
  }, []);

  return (
    <section className="generator">
      <Toaster position="top center" />
      <Link to={"/"} className="button-52" role="button">
        Back To Home
      </Link>
      <div className="container">
        <h2 className="trans-btn">
          Now you can Create your Own Gradient "
          <span className="jsd"> just scroll down </span>" Choose your Colors 🎨
          And Copy The Code. 💻
        </h2>
        <div
          className="gradient-area"
          id="gradient-area"
          style={{
            backgroundImage: `linear-gradient(${parseInt(
              degValue
            )}deg , ${arrOfColors.join(" , ")})`,
          }}
        >
          <Tooltip title="Copy Gradient ✨">
            <button onClick={copeid}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </Tooltip>
        </div>
        <p className="tip">"Choose your Colors 🎨 Here 👇🏻"</p>
        <div className="action-area">
          <div className="input-colors">
            <input type="color" id="input-color" />
            <input type="color" id="input-color" />
          </div>
          <div className="set-deg">
            Set The Gradient Degree
            <input
              type="number"
              step={2}
              id="deg-val"
              onChange={createMyGradient}
            />
          </div>
          <button className="button-52" onClick={createMyGradient}>
            Generate My Gradient
          </button>
          <div className="action-btns">
            <Tooltip title="Add New Color 🟡">
              <button onClick={addNewColor} className="add-color">
                +
              </button>
            </Tooltip>
            <Tooltip title="Click to Delete The Last One 🗑">
              <button onClick={removeColor} className="remove-color">
                <lord-icon
                  src="https://cdn.lordicon.com/gsqxdxog.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "40px", height: "40px" }}
                ></lord-icon>
                Delete
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Genetator;
