// We want to always get from source
import { MapContainer } from "react-leaflet";
import dynamic from "next/dynamic";
import Head from "next/head";
// import MyMapContainer from "../components/Player";
const MapComponent = dynamic(import("../components/map/MapComponent"), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/all.css"/>
      </Head>
      <MapComponent />
    </>
  );
}
