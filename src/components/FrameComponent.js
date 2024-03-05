import React, { useState } from "react";
import Cards from "./Cards";
import styles from "../styles/FrameComponent.module.css";
import GroupComponent from "./CardsComponent/GroupComponent";
import GroupComponent1 from "./CardsComponent/GroupComponent1";
import GroupComponent2 from "./CardsComponent/GroupComponent2";
import GroupComponent3 from "./CardsComponent/GroupComponent3";
import GroupComponent4 from "./CardsComponent/GroupComponent4";
import GroupComponent5 from "./CardsComponent/GroupComponent5";
import GroupComponent6 from "./CardsComponent/GroupComponent6";
import GroupComponent7 from "./CardsComponent/GroupComponent7";
import GroupComponent8 from "./CardsComponent/GroupComponent8";


const FrameComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showData, setShowData] = useState(false);
  let timer;

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
    setShowData(false); 
    clearTimeout(timer); 
    timer = setTimeout(() => {
      setShowData(true);
    }, 500); 
  };

  const handleCardLeave = () => {
    clearTimeout(timer); 
    setHoveredCard(null);
    setShowData(false); 
  };

  const renderGroupComponent = () => {
    switch (hoveredCard) {
      case 1:
        return <GroupComponent />;
      case 2:
        return <GroupComponent1 />;
      case 3:
        return <GroupComponent2 />;
      case 4:
        return <GroupComponent3 />;
      case 5:
        return <GroupComponent4 />;
      case 6:
        return <GroupComponent5 />;
      case 7:
        return <GroupComponent6 />;
      case 8:
        return <GroupComponent7 />;
      case 9:
        return <GroupComponent8 />;
      default:
        return null;
    }
  };
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
      <Cards onCardHover={handleCardHover} onCardLeave={handleCardLeave} />
      {showData && renderGroupComponent()} 
    </div>
  );
};

export default FrameComponent;

