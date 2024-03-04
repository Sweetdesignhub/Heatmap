import React from 'react'
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div className={styles.highIAImpact}>
      <div className={styles.component1}>
        <div className={styles.totalbusinessfunctionframeParent}>
          <div className={styles.totalbusinessfunctionframe} />
          <h3 className={styles.spaceTheFinalContainer}>
            <p className={styles.invoiceTo}>{`Invoice to `}</p>
            <p className={styles.cash}>Cash</p>
          </h3>
          <div className={styles.wepikExport20240215202541ndnWrapper}>
            <img
              className={styles.wepikExport20240215202541ndnIcon}
              loading="lazy"
              alt=""
              src="/wepikexport20240215202541ndnt-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.component2} onClick={() => handleCardClick(2)}>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild3} />
          <h3 className={styles.spaceTheFinalContainer4}>
            <p className={styles.account}>{`Account to`}</p>
            <p className={styles.report}>Report</p>
          </h3>
          <div className={styles.wrapper20945973Converted1Wrapper1}>
            <div className={styles.wrapper20945973Converted2}>
              <img
                className={styles.converted1Icon1}
                loading="lazy"
                alt=""
                src="/wepikexport20240215204030khbb-1@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.wepikExport20240215202541ndnIcon2}
            alt=""
            src="/wepikexport20240215202541ndnt-1@2x.png"
          />
        </div>
      </div>

      <div className={styles.component3}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h3 className={styles.spaceTheFinalContainer1}>
            <p className={styles.time}>{`Time &`}</p>
            <p className={styles.expense}>Expense</p>
          </h3>
          <div className={styles.wrapper20945973Converted1Wrapper}>
            <div className={styles.wrapper20945973Converted1}>
              <img
                className={styles.converted1Icon}
                loading="lazy"
                alt=""
                src="/20945973converted-1@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.wepikExport20240215202541ndnIcon1}
            alt=""
            src="/wepikexport20240215202541ndnt-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.component4}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <h3 className={styles.spaceTheFinal}>Payroll</h3>
          <div className={styles.wrapperWepikExport202402152Wrapper}>
            <div className={styles.wrapperWepikExport202402152}>
              <img
                className={styles.wepikExport20240215210111lvjIcon}
                loading="lazy"
                alt=""
                src="/wepikexport20240215210111lvjo-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component7}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.spaceTheFinalFronParent}>
            <h3 className={styles.spaceTheFinalContainer2}>
              <p className={styles.performance}>Performance</p>
              <p className={styles.reporting}>Reporting</p>
            </h3>
            <div className={styles.wrapperWepikExport2024021521}>
              <img
                className={styles.wepikExport20240215212201hnqIcon}
                loading="lazy"
                alt=""
                src="/wepikexport20240215212201hnqw-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component5}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.spaceTheFinalFronWrapper}>
            <h3 className={styles.spaceTheFinalContainer3}>
              <p className={styles.finPlanning}>Fin planning</p>
              <p className={styles.analysis}>{`& Analysis`}</p>
            </h3>
          </div>
          <img
            className={styles.wepikExport20240215210525owcIcon}
            loading="lazy"
            alt=""
            src="/wepikexport20240215210525owci-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.component6}>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameChild4} />
          <div className={styles.spaceTheFinalFronGroup1}>
            <h3 className={styles.spaceTheFinal3}>Planning & Forecasting</h3>
            <div className={styles.wrapperWepikExport202402152244}>
              <img
                className={styles.wepikexport20240215211747wkkgIcon}
                loading="lazy"
                alt=""
                src="/wepikexport20240215211747wkkg-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component8}>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.spaceTheFinalFronGroup}>
            <h3 className={styles.spaceTheFinal1}>Performance Analytics</h3>
            <div className={styles.wrapperWepikExport2024021522}>
              <img
                className={styles.wepikExport20240215212412ew4Icon}
                loading="lazy"
                alt=""
                src="/wepikexport20240215212412ew4i-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component9}>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <div className={styles.spaceTheFinalFronContainer}>
            <h3 className={styles.spaceTheFinal2}>General Asset Accounts</h3>
            <div className={styles.wrapperWepikExport2024021523}>
              <img
                className={styles.wepikExport20240215212841szdIcon}
                loading="lazy"
                alt=""
                src="/wepikexport20240215212841szdx-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

