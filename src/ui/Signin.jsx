import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import FormRow from "./FormRow";
import Form from "./Form";

const StyledSignin = styled.div``;

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, watch } = useForm();

  const [currEmailValue, currPasswordValue] = watch(["email", "password"]);
  console.log(currEmailValue);
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <StyledSignin>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="email"
          inputValue={currEmailValue?.length ? "true" : "false"}
        >
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="password"
          inputValue={currPasswordValue?.length ? "true" : "false"}
        >
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Form>
    </StyledSignin>
  );
}

export default Signin;
