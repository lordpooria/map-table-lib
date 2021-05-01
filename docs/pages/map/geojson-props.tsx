import dynamic from "next/dynamic";
const GeoJSONProps = dynamic(() => import("../../components/map/mdx/geojson-props.mdx"as any), {
  ssr: false,
});

function Page () {
  return (
    <div>
      <GeoJSONProps />
    </div>
  );
}
export default Page