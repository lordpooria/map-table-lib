import dynamic from "next/dynamic";
const MaterialTheme = dynamic(
  () => import("../../../components/table/mdx/custom-styles/custom-mat-theme.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <MaterialTheme />
    </div>
  );
}
export default Page
