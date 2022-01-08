import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import HomePage from "../components/pages/Home/Home";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
