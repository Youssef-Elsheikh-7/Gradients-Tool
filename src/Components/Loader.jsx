import "../Style/Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <lord-icon
        src="https://cdn.lordicon.com/ymrqtsej.json"
        trigger="loop"
        delay="0"
        colors="primary:#e0e8f0"
        style={{ width: "250px", height: "250px" }}
      ></lord-icon>
    </div>
  );
}
export default Loader;
