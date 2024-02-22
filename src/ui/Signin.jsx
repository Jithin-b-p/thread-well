import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import FormRow from "./FormRow";
import Form from "./Form";
import Button from "./Button";
import { doSignInWithGoogle } from "../firebase/Auth";

const StyledSignin = styled.div``;

function Signin() {
  const { register, handleSubmit, watch, reset } = useForm();

  const [currEmailValue, currPasswordValue] = watch(["email", "password"]);

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  function onGoogleSignIn(e) {
    e.preventDefault();
    doSignInWithGoogle();
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
        <FormRow direction="row">
          <Button type="submit" $variation="primary">
            SIGN IN
          </Button>
          <Button onClick={onGoogleSignIn} $variation="secondary">
            SIGN IN WITH GOOGLE
          </Button>
        </FormRow>
      </Form>
    </StyledSignin>
  );
}

export default Signin;
