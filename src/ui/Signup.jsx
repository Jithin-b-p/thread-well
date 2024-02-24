import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import FormRow from "./FormRow";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { signUp } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledSignup = styled.div``;

function Signup() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm();
  const navigate = useNavigate();

  const [name, currEmail, currPassword, confirmpass] = watch([
    "displayname",
    "signupemail",
    "signuppassword",
    "confirmpassword",
  ]);

  useEffect(() => {
    clearErrors("server");
  }, [clearErrors, currEmail]);

  const onSubmit = (data) => {
    const { signupemail: email, signuppassword: password, displayname } = data;
    const res = signUp(email, password, { email, displayname });
    res.then((result) => {
      if (result === "auth/email-already-in-use") {
        setError("server", {
          type: "auth/email-already-in-use",
          message: "Already registered",
        });
        return;
      }
      reset();
      navigate("/home");
    });
  };

  const onError = (error) => {
    console.log(error);
  };
  return (
    <StyledSignup>
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow
          label="Display Name"
          inputValue={name?.length ? "true" : "false"}
          error={errors?.displayname?.message}
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
          error={errors?.signupemail?.message}
          otherError={errors?.server?.message}
        >
          <Input
            type="email"
            id="signupemail"
            {...register("signupemail", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Password"
          inputValue={currPassword?.length ? "true" : "false"}
          error={errors?.signuppassword?.message}
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
          error={errors?.confirmpassword?.message}
        >
          <Input
            type="password"
            id="confirmpassword"
            {...register("confirmpassword", {
              required: "This field is required",
              validate: (fieldValue) => {
                return fieldValue === currPassword || "Password not match";
              },
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
