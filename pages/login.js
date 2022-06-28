import React from "react";
//import Login from "../component/auth/Login";
import dynamic from "next/dynamic";
import Layout from "/component/layouts/Layout";
const Login = dynamic(() => import("/component/auth/Login"), {
  loading: () => <p>Loading...</p>,
});
const login = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default login;
