import dynamic from "next/dynamic";
const Pagination = dynamic(
  () => import("../../components/table/mdx/pagination.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <Pagination />
    </div>
  );
}
export default Page