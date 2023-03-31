// import Icon from "assets/Icons";
// import theme from "@theme/index";

export const Alert = ({ type, width, height, text, margin }) => {
  if (type === "danger") {
    return (
      <div
        style={{
          color: `red`,
          backgroundColor: '#f87b7b',
          width: width,
          height: height,
          border: `1px solid #653030`,
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          margin: margin,
        }}
      >
        <div style={{ paddingLeft: "16px", paddingTop: "4px" }}>
          {/* <Icon name="AlertXIcon" width={"16"} height={"16"} /> */}
        </div>
        <div style={{ paddingLeft: "10px" }}>{text}</div>
      </div>
    );
  }
};
