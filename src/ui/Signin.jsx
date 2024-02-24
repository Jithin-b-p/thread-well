import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "./Input";
import FormRow from "./FormRow";
import Form from "./Form";
import Button from "./Button";
import { doSignInWithGoogle, signIn } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext/AuthContext";
import { useEffect } from "react";

const StyledSignin = styled.div``;

function Signin() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    clearErrors,
  } = useForm();
  const [currEmailValue, currPasswordValue] = watch(["email", "password"]);
  const navigate = useNavigate();
  const { setLoading } = useAuth();

  useEffect(() => {
    clearErrors("invalidCredential");
  }, [clearErrors, currEmailValue, currPasswordValue]);

  function onSubmit(data) {
    const { email, password } = data;

    const res = signIn(email, password);

    res.then((result) => {
      if (result === "auth/invalid-credential") {
        setError("invalidCredential", {
          type: "validation",
          message: "invalid email/password",
        });

        return;
      }
      reset();
      navigate("/home");
    });
  }

  function onGoogleSignIn(e) {
    e.preventDefault();
    setLoading((loading) => !loading);
    const result = doSignInWithGoogle();
    result.then(() => setLoading((loading) => !loading));
    navigate("/home");
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
          otherError={errors?.invalidCredential?.message}
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
