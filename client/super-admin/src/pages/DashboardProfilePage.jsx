import ProfileInner from "../components/ProfileInner";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";

const DashboardProfilePage = () => {
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* ProfileInner */}
        <ProfileInner />
      </MasterLayout>
    </>
  );
};

export default DashboardProfilePage;
