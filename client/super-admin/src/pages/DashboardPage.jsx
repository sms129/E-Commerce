import DashboardInner from "../components/DashboardInner";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";

const DashboardPage = () => {
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* DashboardInner */}
        <DashboardInner />
      </MasterLayout>
    </>
  );
};

export default DashboardPage;
