import Cards from "./Cards";
import styles from "./FrameComponent.module.css";


const FrameComponent = () => {
  return (
    <div className={styles.automationEllipse}>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-34624416.svg"
        />
        <div className={styles.inProgressGalileoProgramTe}>
          <div className={styles.iASolutionsHubParent}>
            <div className={styles.iASolutionsHub} />
            <img
              className={styles.wepikExport202402151948012gtIcon}
              loading="lazy"
              alt=""
              src="/wepikexport202402151948012gtn-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.intelligentAutomationHeat}>
          Intelligent Automation Heat map
        </div>
        <div className={styles.polygonWrapper}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/polygon-6.svg"
          />
        </div>
        <div className={styles.finance}>Finance</div>
      </div>
      <Cards />
    </div>
  );
};

export default FrameComponent;

