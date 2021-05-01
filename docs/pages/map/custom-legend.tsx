import dynamic from "next/dynamic";
const CustomLegend = dynamic(() => import("../../components/map/mdx/custom-legend.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <CustomLegend />
    </div>
  );
}

export default Page