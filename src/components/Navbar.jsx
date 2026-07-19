function Navbar() {
  return (
    <nav
      style={{
       background: "rgba(17, 17, 17, 0.9)",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
  <h2
  style={{
    color: "#39ff14",
    fontSize: "32px",
    textShadow: "0 0 15px #39ff14",
    cursor: "pointer",
    margin: 0,
  }}
>
KING OF POCKET
</h2>

      <a
  href="https://t.me/+IdKuNLEQFQ5hNjM8"
  target="_blank"
  rel="noreferrer"
  onClick={(e) => {
  e.preventDefault();

  if (window.fbq) {
    window.fbq("track", "Lead", {}, {
      event_callback: () => {
        window.open("https://t.me/+IdKuNLEQFQ5hNjM8", "_blank");
      }
    });
  } else {
    window.open("https://t.me/+IdKuNLEQFQ5hNjM8", "_blank");
  }
}}
  style={{
    color: "#00c853",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Join Telegram
</a>
    </nav>
  );
}

export default Navbar;