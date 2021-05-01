import Link from "next/link";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { mapRoutes, tableRoutes } from "./routes";

function renderSubMenu(props: Array<LinkItem>, parentTitle: string) {
  return (
    <Menu iconShape="square">
      <SubMenu title={parentTitle}>
        {props.map(({ href, title }) => (
          <Link href={href}>
            <MenuItem>{title}</MenuItem>
          </Link>
        ))}
      </SubMenu>
    </Menu>
  );
}

type LinkItem = { title: string; href: string };

function renderMenu(props: LinkItem & { children?: Array<LinkItem> }) {
  return props.children ? (
    renderSubMenu(props.children, props.title)
  ) : (
    <Link href={props.href}>
      <Menu iconShape="square">
        <MenuItem>{props.title}</MenuItem>
      </Menu>
    </Link>
  );
}

function Sidebar() {
  return (
    <ProSidebar style={{ width: 200 }}>
      <SidebarHeader>
        <p>Hesaba</p>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="square">
          <SubMenu title={"Map"}>{mapRoutes.map(renderMenu)}</SubMenu>
        </Menu>
        <Menu iconShape="square">
          <SubMenu title={"Table"}>{tableRoutes.map(renderMenu)}</SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>{/* <p>@2020Hesaba</p> */}</SidebarFooter>
    </ProSidebar>
  );
}

export default  Sidebar
