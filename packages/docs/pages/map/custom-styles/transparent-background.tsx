import dynamic from "next/dynamic";
const CustomStyleTransparent = dynamic(
  () =>
    import("../../../components/map/mdx/custom-styles/transparent-background.mdx"as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div>
      <CustomStyleTransparent />
    </div>
  );
}
export default Page
