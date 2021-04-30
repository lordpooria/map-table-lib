import dynamic from "next/dynamic";
const MapWithTable = dynamic(() => import("../../components/map/mdx/map-with-table.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <MapWithTable />
    </div>
  );
}
