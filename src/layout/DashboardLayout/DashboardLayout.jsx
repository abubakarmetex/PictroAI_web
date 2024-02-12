import React, { Suspense, useEffect } from 'react';  // Combine the imports here
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is not logged in and navigate to login page
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container fluid className="p-0">
      {/* Collapsible Sidebar */}
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
