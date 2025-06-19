import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const AnimatedInput = ({ type = "text", name, placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: "0.5rem",
          top: isActive ? "-0.75rem" : "0.5rem",
          fontSize: isActive ? "0.75rem" : "1rem",
          color: isActive ? "#9333ea" : "gray",
          padding: "0 0.25rem",
          transition: "all 0.3s ease in-out",
          pointerEvents: "none",
        }}
      >
        {placeholder}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem 0.5rem 0.25rem 0.5rem",
          border: "none",
          outline: "none",
          borderBottom: "2px solid gray",
          backgroundColor: "unset",
          fontSize: "1rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: "100%",
          background: "#9333ea",
          transform: focused ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />
    </div>
  );
};
const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;
    emailjs
      .sendForm("portfolio_thoang", "template_yzwtoij", form.current, userId)
      .then(
        (result) => {
          alert("Gửi thành công 🎉");
          form.current.reset();
          console.log(result, "result");
        },
        (error) => {
          console.log(error);
          alert("Lỗi khi gửi ❌: " + error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "28rem",
        margin: "0 auto",
        padding: "1.5rem",
      }}
    >
      <div
        style={{ position: "relative", height: "2rem", marginBottom: "4rem" }}
      >
        <h1
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-once="false"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: "1.5rem",
            fontWeight: "bold",
            borderBottom: "3px solid #9333ea",
            paddingBottom: "0.25rem",
          }}
        >
          Say hello
        </h1>
      </div>{" "}
      <AnimatedInput name="user_name" placeholder="Your name" />
      <AnimatedInput type="email" name="user_email" placeholder="Your email" />
      <AnimatedInput name="message" placeholder="Content" />
      <button
        type="submit"
        style={{
          display: "inline-block",
          backgroundColor: "#6b46c1",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "9999px",
          boxShadow: "0 10px 15px -3px rgba(72, 0, 255, 0.3)",
          transition: "all 0.5s",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={sendEmail}
      >
        Gửi tin nhắn
      </button>
    </form>
  );
};

export default ContactForm;
