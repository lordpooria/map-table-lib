import dynamic from "next/dynamic";
const CustomLegend = dynamic(() => import("../../components/map/mdx/custom-legend.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <CustomLegend />
    </div>
  );
}
