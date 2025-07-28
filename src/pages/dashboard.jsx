import Body from "./dashboard/body";
import Header from "./dashboard/header";
import Sidebar from "./dashboard/sidebar";

const Dashboard = () => {
  return (
    <section
      style={{
        display: "flex",
        backgroundColor: "#F6F7F8",
        width: "100%",
        height: "95vh",
      }}
    >
      <Sidebar />
      <div style={{ display: "block", height: "100%" }}>
        <Header />
        <Body />
      </div>
    </section>
  );
};
export default Dashboard;
