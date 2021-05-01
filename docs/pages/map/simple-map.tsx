import dynamic from "next/dynamic";
const Basemap = dynamic(() => import("../../components/map/mdx/simple-map.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <Basemap />
    </div>
  );
}
export default Page