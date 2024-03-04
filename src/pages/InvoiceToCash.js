import Sidebar from "../components/Sidebar";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/CardsComponent/GroupComponent";
import styles from "./InvoiceToCash.module.css";


const InvoiceToCash = () => {
  return (
    <div className={styles.invoiceToCash}>
      <Sidebar />
      <main className={styles.invoiceToCashInner}>
        <section className={styles.automationEllipseParent}>
          <FrameComponent />
          <GroupComponent />
        </section>
      </main>
    </div>
  );
};

export default InvoiceToCash;

