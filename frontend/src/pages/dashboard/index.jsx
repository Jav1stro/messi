import React from "react";
import Drawer from "../../compoments/drawer";
import Page from "../../compoments/Page";
import DasboardLayout from "../../layouts/dashboard";
import styles from "../../styles/dashboard.module.css";
import HookForm from '../../compoments/hookForm'


const DashboardPage = () => {
  return (
    <Page title="Dashboard">
      <DasboardLayout>
        <div className={styles.container}>
        <h1>Dashboard </h1>
        <HookForm />
        </div>
      </DasboardLayout>
    </Page>
  );
};

export default DashboardPage;
