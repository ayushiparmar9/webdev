import React, { useState } from "react";
const Contact = () => {
  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [messege, setMessege] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [contactData, setcontactData] = useState({
    fullName: "",
    email: "",
    messege: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setcontactData({
      fullName: "",
      email: "",
      messege: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.messege);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <form
          className="text-center"
          onReset={handleClearForm}
          onSubmit={handleSubmit}
        >
          <div className="d-flex">
            <label htmlFor="fullName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              name="fullName"
              value={contactData.fullName}
              onChange={handleChange}
              placeholder="Entere your name"
              className="text-primary form-control"
              required
            />
          </div>
          <div className="d-flex">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="Entere your email"
              className="text-primary form-control"
              required
            />
          </div>

          <div className="d-flex">
            <label htmlFor="messege">messege</label>
            <textarea
              name="messege"
              value={contactData.messege}
              onChange={handleChange}
              placeholder="Entere your messege"
              className="text-primary form-control"
              required
            ></textarea>
          </div>
          <button type="reset" className="btn  btn-warning">
            Reset
          </button>
          <button type="submit" className="btn btn-success">
            {IsLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
