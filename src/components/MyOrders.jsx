function MyOrders({ cartItems }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Orders</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                background: "white",
                padding: "15px",
                margin: "15px 0",
                borderRadius: "15px",
                boxShadow: "3px 3px 8px gray",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "80px", marginRight: "20px" }}
              />

              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <h3>Total Bill: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
}

export default MyOrders;
