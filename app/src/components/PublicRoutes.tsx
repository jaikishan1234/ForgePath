import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import Loading from "./loading";


const PublicRoutes = () => {
  const { isAuth, loading } = useAppData();

  if (loading) return <Loading />;

  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoutes;