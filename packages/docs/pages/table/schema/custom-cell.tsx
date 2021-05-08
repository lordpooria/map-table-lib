import dynamic from "next/dynamic";
const CustomCell = dynamic(
  () => import("../../../components/table/mdx/schema/custom-cell.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <CustomCell />
    </div>
  );
}
export default Page
