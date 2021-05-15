import dynamic from "next/dynamic";
const TooltipPage = dynamic(() => import("../../../components/table/mdx/tooltip/simple-tooltip.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <TooltipPage />
    </div>
  );
}
export default Page