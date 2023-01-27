import React from "react";
import Drawer from "../../compoments/drawer";
import Page from "../../compoments/Page";
import DasboardLayout from "../../layouts/dashboard";

const DashboardPage = () => {
  return (
    <Page title="Dashboard">
      <DasboardLayout>
        <h1>Dashboard </h1>
      </DasboardLayout>
    </Page>
  );
};

export default DashboardPage;
