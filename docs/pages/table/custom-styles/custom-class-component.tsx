import dynamic from "next/dynamic";
const CustomizableClassComponent = dynamic(
  () => import("../../../components/table/mdx/custom-styles/custom-class-component.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <CustomizableClassComponent />
    </div>
  );
}
export default Page
