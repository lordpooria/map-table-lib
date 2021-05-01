import dynamic from "next/dynamic";
const TimeProps = dynamic(() => import("../../components/map/mdx/time-props.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <TimeProps />
    </div>
  );
}
export default Page