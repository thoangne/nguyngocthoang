import { useEffect, useState } from "react";

export default function AvatarSwitcher() {
  const [isCartoon, setIsCartoon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCartoon((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval); // cleanup khi component bị unmount
  }, []);

  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        overflow: "hidden",
        position: "relative",
        marginLeft: "20px",
        padding: "3px", // tạo viền
        backgroundImage:
          "linear-gradient(to right, rgb(190 190 190), rgb(131 0 255))", // gradient xanh-tím
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          overflow: "hidden",
          backgroundColor: "white", // nền trắng cho phần giữa border
        }}
      >
        <img
          key={isCartoon ? "cartoon" : "real"}
          src="./avt2.png"
          alt="Avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "9999px",
            transition: "opacity 1s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
