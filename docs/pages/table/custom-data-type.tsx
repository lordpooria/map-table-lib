import dynamic from "next/dynamic";
const CustomDataType = dynamic(
  () => import("../../components/table/mdx/custom-data-type.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <CustomDataType />
    </div>
  );
}
export default Page
