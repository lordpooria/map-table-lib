import React from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import { useTDStoreState } from "../store";
import { TableClasses } from "../types/TableType";
import clsx from "clsx";

const useStyles = makeStyles({
  root: { width: "100%" },
});

interface Props {
  classes?: TableClasses;
}

const UsersTab = ({ classes }: Props) => {
  const tabClasses = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  const users = useTDStoreState((state) => state.users);
  return (
    <>
      <AppBar
        position="static"
        className={clsx(tabClasses.root, classes?.tabbar)}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction"
            wrapped
          />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel> */}
    </>
  );
};

export default UsersTab;
