import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  const formSubmit = () => {
    console.log(data.name);
  };
  return (
    <div className="pages">
      <div className="container my-5">
        <div className="row">
          <div className="form col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Enter Your Message Here"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
