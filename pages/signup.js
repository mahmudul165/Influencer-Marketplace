import React from "react";
//import Signup from "../component/auth/SignUp";
import dynamic from "next/dynamic";
import Layout from "/component/layouts/Layout";
const Signup = dynamic(() => import("/component/auth/SignUp"), {
  loading: () => <p>Loading...</p>,
});

const signup = () => {
  return (
    <Layout>
      <Signup />
    </Layout>
  );
};

export default signup;
