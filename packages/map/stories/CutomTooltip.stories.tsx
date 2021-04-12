import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";

import data from "./utils/data/small_data.json";
import { storiesOf } from "@storybook/react";
import { baseMapProps } from "./utils/constants";
import TooltipCustomMD from "./docs/TooltipCustom.md";
import React from "react";
import { DocsProvider } from "./docs/DocsProvider";
import { Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";

const Tooltip = ({ properties }: { properties: Record<string, any> }) => {
  return (
    <>
      <div>
        <Typography
          variant="caption"
          style={{ color: properties.color, fontFamily: "inherit" }}
        >
          نام کاربری:
        </Typography>
        <NumberFormat
          format="(###) ###-####"
          mask="_"
          readOnly
          value={properties.id}
          style={{
            color: properties.color,
            borderWidth: 0,
            fontFamily: "inherit",
          }}
        />
      </div>
    </>
  );
};

export const CustomTooltip = () => {
  return (
    <HesabaTimeDimension
      mapProps={baseMapProps}
      data={data as any}
      layerProps={{ ToolTipComponent: Tooltip }}
    />
  );
};

CustomTooltip.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={TooltipCustomMD}>
          <CustomTooltip />
        </DocsProvider>
      );
    },
  },
};

export default {
  title: "Tooltip Custom Component",
};
