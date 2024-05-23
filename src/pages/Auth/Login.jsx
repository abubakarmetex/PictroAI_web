import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import authBg from "@images/auth-bg.jpg";
import logoImg from "@images/site_logo.svg";
import Input from "@components/Input/Input";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import { Form as FormikForm, Formik } from "formik";
import { Helmet } from "react-helmet";
import "./auth.scss";
import { loginUser } from "../../redux/auth/auth_actions";
const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.auth);
  const inititialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(loginUser(values))
      navigate('/dashboard');
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="auth-main-wrapper bgchange">
        <Container>
          <Card className="auth-card-wrapper" bg="black">
            <Row className="justify-content-center g-0">
              {/* <Col xs={12} sm={12} md={12} lg={6}>
                <img className="auth-bg" src={authBg} alt="auth-background" />
              </Col> */}
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="auth-form-wrapper text-white">
                  <img className="auth-logo" src={logoImg} alt="auth-logo" />
                  <h3 className="auth-form-title text-white">Sign in to your account</h3>
                  <Formik
                    initialValues={inititialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <FormikForm>
                        <Input
                          name="email"
                          placeholder="user@domain.com"
                          label="Email"
                          type="text"
                        />
                        <Input
                          name="password"
                          placeholder="password"
                          label="Password"
                          type="password"
                        />
                        <Button
                          className="my-3 battn"
                          type="submit"
                          disabled={loading}
                        >
                          {isSubmitting ? (
                            <Spinner animation="border" size="lg" />
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </FormikForm>
                    )}
                  </Formik>
                  <Link className="auth-link" to="/">
                    Forgot password?
                  </Link>
                  <p className="auth-bottom-text">
                    Don't have an account?{" "}
                    <Link className="auth-link" to="/signup">
                      Register here
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
