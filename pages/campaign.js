import React from "react";
//import Campaign from "../component/brand/Campaign";

import dynamic from "next/dynamic";
import Layout from "/component/layouts/Layout";
const Campaign = dynamic(() => import("/component/brand/Campaign.js"), {
  loading: () => <p>Loading...</p>,
});

const campaign = () => {
  return (
    <>
      <Layout>
        <Campaign />
      </Layout>
    </>
  );
};

export default campaign;
