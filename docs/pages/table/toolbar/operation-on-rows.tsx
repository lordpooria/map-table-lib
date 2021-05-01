import dynamic from "next/dynamic";
const OperationOnRows = dynamic(
  () => import("../../../components/table/mdx/toolbar/operation-on-rows.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <OperationOnRows />
    </div>
  );
}
export default Page
