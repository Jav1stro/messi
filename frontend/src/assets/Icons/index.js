import { AlertIcon } from "./AlertIcon";
import { AlertXIcon } from "./AlertXIcon";
import { ArgIcon } from "./ArgIcon";
import { EyeIcon } from "./EyeIcon";
import { InfoIcon } from "./InfoIcon";
import { ArrowIcon } from "./ArrowIcon";
import { CheckIcon } from "./CheckIcon";
import { BlockedIcon } from "./BlockedIcon";
import { ArrowBottomIcon } from "./ArrowBottomIcon";
import { LogOutIcon } from "./LogOutIcon";

const Icon = ({ name, width, height, color }) => {
  switch (name) {
    case "AlertIcon":
      return <AlertIcon width={width} height={height} />;
    case "AlertXIcon":
      return <AlertXIcon width={width} height={height} />;
    case "ArgIcon":
      return <ArgIcon />;
    case "EyeIcon":
      return <EyeIcon width={width} height={height} />;
    case "InfoIcon":
      return <InfoIcon width={width} height={height} color={color} />;
    case "ArrowIcon":
      return <ArrowIcon width={width} height={height} />;
    case "CheckIcon":
      return <CheckIcon width={width} height={height} />;
    case "BlockedIcon":
      return <BlockedIcon width={width} height={height} color={color} />;
    case "ArrowBottomIcon":
      return <ArrowBottomIcon width={width} height={height} color={color} />;
      case "LogOutIcon":
      return <LogOutIcon width={width} height={height} color={color} />;
  }
};

export default Icon;
