import dynamic from "next/dynamic";
const SimpleProps = dynamic(
  () => import("../../components/table/mdx/simple-props.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div style={{marginBottom:100}}>
      <SimpleProps />
    </div>
  );
}
export default Page