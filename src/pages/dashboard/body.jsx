const Body = () => {
  return (
    <section
      style={{
        width: "81vw",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          marginRight: "20px",
          padding: "10px",
          height: "40px",
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            margin: "0px",
            padding: "0",
          }}
        >
          Total Tickets
          <br />
          <strong style={{ fontSize: "18px" }}>10</strong>
        </p>
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
          <img src="money-coins.svg" width={15} alt="d" />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          marginRight: "20px",
          padding: "10px",
          height: "40px",
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            margin: "0px",
            padding: "0",
          }}
        >
          Open Tickets
          <br />
          <strong style={{ fontSize: "18px" }}>5</strong>
        </p>
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
          <img src="open-ticket.svg" width={15} alt="d" />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "10px",
          height: "40px",
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            margin: "0px",
            padding: "0",
          }}
        >
          Closed Tickets
          <br />
          <strong style={{ fontSize: "18px" }}>5</strong>
        </p>
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
          <img src="Shape.svg" width={15} alt="d" />
        </div>
      </div>
    </section>
  );
};
export default Body;
