import { FunctionComponent, useState } from "react";
import styles from "../css/MyPage.module.css";
import Header from "../components/Header";
import SNB from "../components/Snb";
import { Checkbox } from "@mui/material";
import MyInfo from "../components/MyInfo";
import ApplyActivity from "../components/ApplyActivity";
import Community from "../components/Community";

type MyPageSNBMenu = "SELF_MANAGEMENT" | "APPLY_ACTIVITY" | "COMMUNITY";

const MyPage: FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState("SELF_MANAGEMENT");

  const handleMenuSelect = (menu: MyPageSNBMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header />

      <div className={styles.contentContainer}>
        <SNB handleMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />

        {selectedMenu === "SELF_MANAGEMENT" && <MyInfo></MyInfo>}

        {selectedMenu === "APPLY_ACTIVITY" && <ApplyActivity></ApplyActivity>}

        {selectedMenu === "COMMUNITY" && <Community></Community>}
      </div>
    </>
  );
};

export default MyPage;
