import { Link } from "react-router-dom";
import "../Style/Choose.scss";
function Choose() {
  return (
    <div className="choose">
      <h2 className="trans-btn">
        you can choose any gradient from here "
        <span className="jsd"> just scroll down </span>" or Create your Own
      </h2>
      <Link to="/generate" className="button-52">
        Create your Own
      </Link>
      <div className="scroll-down">
        <lord-icon
          src="https://cdn.lordicon.com/wtfdpwey.json"
          trigger="loop"
          colors="primary:#ffffff,secondary:#7f5af0"
          style={{ width: "70px", height: "70px" }}
        ></lord-icon>
      </div>
    </div>
  );
}
export default Choose;
