import Nav from "./Nav";
import React from "react";
import styles from "../styles/Layout.module.css";

type MyComponentProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
