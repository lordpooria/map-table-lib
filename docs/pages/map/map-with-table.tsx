import dynamic from "next/dynamic";
const MapWithTable = dynamic(() => import("../../components/map/mdx/map-with-table.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <MapWithTable />
    </div>
  );
}
export default Page