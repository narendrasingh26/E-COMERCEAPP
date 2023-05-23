import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/database";

// const firebaseConfig = {
//   
// };


// firebase.initializeApp(firebaseConfig);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // const formData = {
    //   name: name,
    //   email: email,
    //   phone: phone,
    // };

    
    // firebase.database().ref("contacts").push(formData);

    
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <div>
        <h2
          style={{
            textAlign: "center",
            borderBottom: "1px solid black",
            width: "fit-content",
            margin: "auto",
          }}
        >
          Contact us
        </h2>
        <form
          className="container-sm"
          style={{
            marginLeft: "20rem",
            backgroundColor: "skyblue",
            width: "25rem",
            marginTop: "2rem",
            borderRadius: "5px",
          }}
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              style={{ width: "23rem" }}
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              style={{ width: "23rem" }}
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              style={{ width: "23rem" }}
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "9rem", marginTop: "1rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
