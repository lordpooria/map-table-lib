import dynamic from "next/dynamic";
const Basemap = dynamic(() => import("../../components/map/mdx/simple-map.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <Basemap />
    </div>
  );
}
