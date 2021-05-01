import dynamic from "next/dynamic";
const CustomPlayerThumb = dynamic(
  () => import("../../../components/map/mdx/custom-styles/material-theme-object.mdx"as any),
  {
    ssr: false,
  }
);

export default function CustomThumb() {
  return <CustomPlayerThumb />;
}
