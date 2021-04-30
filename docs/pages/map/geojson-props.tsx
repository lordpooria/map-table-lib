import dynamic from "next/dynamic";
const GeoJSONProps = dynamic(() => import("../../components/map/mdx/geojson-props.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <GeoJSONProps />
    </div>
  );
}
