import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import useInput from "./useInput";
import FormFields from "./FormFields";

const SignUp = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // If post request returns with user data "signedUp" variable turns "true"
  const [signedUp, setSignedUp] = useState(false);

  // call useState multiple times to assign the values in same way
    const firstName = useInput(""); // varchar
    const lastName = useInput(""); // varchar
    const country = useInput(""); // varchar
    const email = useInput(""); // varchar
    const password = useInput(""); // varchar
  
  
  // Send all the input to backend via axios post request
  const submitForm = async () => {
      try {
          const res = await fetch('/api/newUser', {
              method: 'POST',
              body: JSON.stringify({
                  firstName: firstName.value,
                  lastName: lastName.value,
                  country: country.value,
                  email: email.value,
                  password: password.value,
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              }
          });
          const data = await res.data.token;
          if (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("ID", data.user._id);
            setSignedUp(true);
          } else {
            setSignedUp(false);
          }

          return data;
      } catch (err) {
          console.error(err);
      }
  }

  return (
    <div>
      {signedUp ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Button variant="success" onClick={handleShow}>
            Sign Up
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
                action="/newAccount"
                method="post"
                className="was-validated"
              >
                <FormFields
                  firstName={firstName}
                  lastName={lastName}
                  country={country}
                  email={email}
                  password={password}
                />
                <div className="container my-3">
                  <button type="submit" className="btn btn-secondary btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}
export default SignUp;
