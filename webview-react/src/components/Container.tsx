import React, { useEffect } from "react";
import { withRouter } from "react-router";

function Container(props: any) {
  const { children, history } = props;

  console.log("history: ", history);

  const watchRouteChange = () => {
    window.addEventListener("message", (event: any) => {
      const message = event.data; // The JSON data our extension sent
      const { command, data } = message;
      switch (command) {
        case "route":
          data.url &&
            history.push({
              pathname: `/${data.url}`,
              state: data.data,
            });
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    watchRouteChange();
  }, []);

  return <>{children}</>;
}
export default withRouter(Container);
