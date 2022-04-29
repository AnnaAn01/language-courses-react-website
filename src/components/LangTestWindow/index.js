import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./LangTestWindowElements";

const LangTestWindow = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ProjectLogo</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Language test</FormH1>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LangTestWindow;
