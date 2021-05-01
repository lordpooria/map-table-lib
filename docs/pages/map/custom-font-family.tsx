import dynamic from "next/dynamic";
const CustomFontFamily = dynamic(
  () => import("../../components/map/mdx/custom-font-family.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div>
      <CustomFontFamily />
    </div>
  );
}
export default Page
