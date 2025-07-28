const Sidebar = () => {
  return (
    <section
      style={{
        backgroundColor: "#F8F9FA",
        height: "90%",
      }}
    >
      <div
        style={{
          backgroundColor: "#F8F9FA",
          padding: "30px",
          height: "100%",
          width: "140px",
          display: "block",
        }}
      >
        <img src="quickfix.png" style={{ cursor: "pointer" }} alt="quickfix" />
        <a
          style={{
            backgroundColor: "#FFFFFF",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
            height: "40px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              padding: "8px",
              marginRight: "8px",
            }}
          >
            <img src="Path.svg" alt="d" />
          </div>
          Dashboard
        </a>
        <a
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            cursor: "pointer",
            width: "100%",
            height: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              padding: "8px",
              marginRight: "8px",
            }}
          >
            <img src="office.svg" alt="d" />
          </div>
          <p style={{ marginRight: "5px", fontSize: "12px" }}>All </p> Tickets
        </a>
        <a
          style={{
            paddingLeft: "10px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
            height: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              padding: "8px",
              marginRight: "8px",
            }}
          >
            <img src="credit-card.svg" alt="d" />
          </div>
          <p style={{ marginRight: "5px", fontSize: "12px" }}>Closed </p>{" "}
          Tickets
        </a>
        <strong
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
            marginBottom: "20px",
            fontSize: "13px",
            width: "100%",
          }}
        >
          ACCOUNT PAGES
        </strong>
        <a
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
            height: "40px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              padding: "8px",
              marginRight: "8px",
            }}
          >
            <img src="customer-support.svg" alt="d" />
          </div>
          Profile
        </a>
        <a
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "100%",
            height: "40px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              padding: "8px",
              marginRight: "8px",
            }}
          >
            <img src="document.svg" alt="d" />
          </div>
          Sign out
        </a>
      </div>
    </section>
  );
};
export default Sidebar;
