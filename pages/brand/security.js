// import Setting from "../../component/brand/Setting";
// import Security from "../../component/brand/Security";
import Layout from "../../component/layouts/Layout";
import dynamic from "next/dynamic";
const Setting = dynamic(() => import("/component/brand/Setting"), {
  loading: () => <p>Loading...</p>,
});
const Security = dynamic(() => import("/component/brand/Security"), {
  loading: () => <p>Loading...</p>,
});

const security = () => {
  return (
    <Layout>
      <Setting>
        <Security />
      </Setting>
    </Layout>
  );
};

export default security;
