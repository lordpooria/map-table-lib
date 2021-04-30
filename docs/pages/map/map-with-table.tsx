import dynamic from "next/dynamic";
const TimeProps = dynamic(() => import("../../components/map/mdx/time-props.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <TimeProps />
    </div>
  );
}
