import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { BsFolder2 } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.picturesRectangleWrapper}>
        <div className={styles.picturesRectangle}>
          <div className={styles.wrapperPictures2}>
            <img
              className={styles.pictures2Icon}
              loading="lazy"
              alt=""
              src="/pictures-2@2x.png"
            />
          </div>
          <div className={styles.chiefTrainingOfficer}>
            Chief Training Officer
          </div>
          <div className={styles.alexaElango}>ALEXA ELANGO</div>
        </div>
      </div>
      <div className={styles.settingsFrame}>
        <div className={styles["sidebar-links"]}>
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? styles.active : ""}
          >
            <IoPerson className={styles.icon} />
            <span className={styles["icon-text"]}>Department</span>
          </Link>
          <Link
            to="/service-risk-report"
            className={
              location.pathname === "/service-risk-report" ? styles.active : ""
            }
          >
            <BsFolder2 className={styles.icon} />
            <span className={styles["icon-text"]}>Dashboard</span>
          </Link>
          <Link
            to="/notifications"
            className={location.pathname === "/notifications" ? styles.active : ""}
          >
            <BsCalendarDate className={styles.icon} />
            <span className={styles["icon-text"]}>Events</span>
          </Link>
          <Link
            to="/report"
            className={location.pathname === "/report" ? styles.active : ""}
          >
            <BsGraphUp className={styles.icon} />
            <span className={styles["icon-text"]}>Stats</span>
          </Link>
          <Link
            to="/report"
            className={location.pathname === "/report" ? styles.active : ""}
          >
            <IoSettingsOutline className={styles.icon} />
            <span className={styles["icon-text"]}>Settings</span>
          </Link>
          <Link
            to="/report"
            className={location.pathname === "/report" ? styles.active : ""}
          >
            <IoLogOutOutline className={styles.icon} />
            <span className={styles["icon-text"]}>Logout</span>
          </Link>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.helpFrameParent}>
          <div className={styles.helpFrame}>
            <div className={styles.exportEllipse} />
            <img
              className={styles.helpFrameChild}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className={styles.eventsFrame}>
            <img
              className={styles.eventsFrameChild}
              alt=""
              src="/rectangle-80.svg"
            />
            <div className={styles.havingTroubleText}>
              <div className={styles.goToHelpCentreText}>
                <div className={styles.helpCentre}>Help Centre</div>
                <div className={styles.havingTroubleContainer}>
                  <p className={styles.havingTrouble}>Having trouble ?</p>
                  <p
                    className={styles.pleaseContactUs}
                  >{`Please contact us for `}</p>
                  <p
                    className={styles.moreInformation}
                  >{`more information `}</p>
                </div>
              </div>
            </div>
            <div className={styles.automationOpportunityText1}>
              <div className={styles.automationOpportunityTextChild} />
              <div className={styles.goToHelp}>Go to help centre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
