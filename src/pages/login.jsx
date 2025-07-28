import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const submitForm = (e) => {
    console.log("form submitted");
    e.preventDefault();
    return navigate("/dashboard");
  };
  return (
    <section
      style={{
        width: "100%",
        height: "97vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <div>
          <img src="/logo.jpg" alt="logo" />
          <div style={{ padding: "10px" }}>
            <strong style={{ fontSize: "30px", color: "#A6CE34" }}>
              Welcome to QUICKFIX
            </strong>
            <br />
            <strong style={{ fontSize: "30px", color: "#A6CE34" }}>
              Sign In
            </strong>
            <p
              style={{
                fontSize: "15px",
                color: "#8392AB",
                marginBottom: "30px",
              }}
            >
              Enter the email and password to log in.
            </p>
            <p style={{ fontSize: "12px" }}>Staff Id or Matric Number</p>
            <form onSubmit={submitForm}>
              <input
                required
                type="text"
                style={{
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "30px",
                  borderRadius: "6px",
                  width: "80%",
                  border: "1px solid #A6CE34",
                }}
              />
              <br />
              <p style={{ fontSize: "12px" }}>Password</p>
              <input
                required
                type="password"
                style={{
                  backgroundColor: "white",
                  paddingLeft: "10px",
                  height: "30px",
                  borderRadius: "6px",
                  width: "80%",
                  border: "1px solid #A6CE34",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  height: "60px",
                }}
              >
                <input
                  type="checkbox"
                  id="myToggle"
                  className="toggle-switch"
                />
                <label htmlFor="myToggle" className="toggle-label"></label>
                <p style={{ fontSize: "12px", marginLeft: "5px" }}>
                  Remember me
                </p>
              </div>
              <button
                type="submit"
                style={{
                  backgroundImage: "linear-gradient( #A6CE34 , #0A770C)",
                  cursor: "pointer",
                  border: "none",
                  width: "80%",
                  height: "40px",
                  color: "white",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ height: "100%", width: "60%" }}>
        <img
          src="background.jpg"
          style={{ width: "100%", height: "100%" }}
          alt="background"
        />
      </div>
    </section>
  );
};
export default Login;
