import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import FormRow from "./FormRow";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { signUp } from "../firebase/Auth";
import { useAuth } from "../contexts/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledSignup = styled.div``;

function Signup() {
  const { register, handleSubmit, reset, watch } = useForm();
  const { setLoading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [name, currEmail, currPassword, confirmpass] = watch([
    "displayname",
    "signupemail",
    "signuppassword",
    "confirmpassword",
  ]);

  const onSubmit = (data) => {
    const {
      signupemail: email,
      signuppassword: password,
      displayname,
      confirmpassword,
    } = data;

    if (confirmpassword !== password) {
      console.log("password error");
      return;
    }

    setLoading((loading) => !loading);
    const res = signUp(email, password, { email, displayname });
    res.then(() => setLoading((loading) => !loading));
    reset();
    navigate("/home");

    // signUp(email, password, data);
  };
  return (
    <StyledSignup>
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Display Name"
          inputValue={name?.length ? "true" : "false"}
        >
          <Input
            type="text"
            id="displayname"
            {...register("displayname", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Email"
          inputValue={currEmail?.length ? "true" : "false"}
        >
          <Input
            type="email"
            id="signupemail"
            {...register("signupemail", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Password"
          inputValue={currPassword?.length ? "true" : "false"}
        >
          <Input
            type="password"
            id="signuppassword"
            {...register("signuppassword", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Confirm Password"
          inputValue={confirmpass?.length ? "true" : "false"}
        >
          <Input
            type="password"
            id="confirmpassword"
            {...register("confirmpassword", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow>
          <Button type="submit" $variation="primary">
            SIGN UP
          </Button>
        </FormRow>
      </Form>
    </StyledSignup>
  );
}

export default Signup;
