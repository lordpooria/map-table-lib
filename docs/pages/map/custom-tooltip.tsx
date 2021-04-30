import dynamic from "next/dynamic";
const CustomTooltip = dynamic(
  () => import("../../components/map/mdx/custom-tooltip.mdx"as any),
  {
    ssr: false,
  }
);


export default function CustomThumb() {
  return <CustomTooltip />;
}
