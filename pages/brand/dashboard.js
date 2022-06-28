//import Dashboard from "../../component/brand/Dashboard";

import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("/component/brand/Dashboard"), {
  loading: () => <p>Loading...</p>,
});
import Layout from "../../component/layouts/Layout";
const dashboard = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default dashboard;
