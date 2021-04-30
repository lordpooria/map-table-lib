import dynamic from "next/dynamic";
const CustomFontFamily = dynamic(
  () => import("../../components/map/mdx/custom-font-family.mdx" as any),
  {
    ssr: false,
  }
);

export default function () {
  return (
    <div>
      <CustomFontFamily />
    </div>
  );
}
