import dynamic from "next/dynamic";
const LTRTable = dynamic(
  () => import("../../../components/table/mdx/custom-styles/ltr-table.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <LTRTable />
    </div>
  );
}
export default Page
