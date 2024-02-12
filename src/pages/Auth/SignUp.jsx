import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Container, Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import authBg from "@images/auth-bg.jpg";
import logoImg from "@images/logo.png";
import Input from "@components/Input/Input";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { registerUser } from "../../redux/auth/auth_actions";
import { Helmet } from "react-helmet";
import "./auth.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);
  const inititialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone_number: Yup.number().required("Phone number is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(registerUser(values));
      navigate('/login');
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Sign Up | Template</title>
      </Helmet>
      <div className="auth-main-wrapper">
        <Container>
          <Card className="auth-card-wrapper">
            <Row className="justify-content-center g-0">
              <Col xs={12} sm={4} md={6}>
                <img className="auth-bg" src={authBg} alt="auth-background" />
              </Col>
              <Col xs={12} sm={8} md={6}>
                <div className="auth-form-wrapper">
                  <img className="auth-logo" src={logoImg} alt="auth-logo" />
                  <h3 className="auth-form-title">Sign in to you account</h3>
                  <Formik
                    initialValues={inititialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <FormikForm>
                        <Input
                          name="name"
                          placeholder="john doe"
                          label="Full name"
                          type="text"
                        />
                        <Input
                          name="email"
                          placeholder="user@domain.com"
                          label="Email"
                          type="text"
                        />
                        <Input
                          name="phone_number"
                          placeholder="+1233242455"
                          label="Phone"
                          type="text"
                        />
                        <Input
                          name="password"
                          placeholder="password"
                          label="Password"
                          type="password"
                        />
                        <Input
                          name="confirmPassword"
                          placeholder="confirm password"
                          label="Confirm Password"
                          type="password"
                        />
                        <Button
                          className="my-3"
                          type="submit"
                          disabled={loading}
                        >
                          {isSubmitting ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Register"
                          )}
                        </Button>
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Signup;
