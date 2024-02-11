import { Fragment } from "react";
import Subscribe from "../components/Extra/Subscribe";
import ExtraServices from "../components/Extra/ExtraService";
import SupplierRegion from "../components/Extra/SuppliersRegion";
import RecommendedItems from "../components/Extra/RecomendedItems";

function Home() {
  return (
    <Fragment>
      <RecommendedItems />
      <ExtraServices />
      <SupplierRegion />
      <Subscribe />
    </Fragment>
  );
}

export default Home;
