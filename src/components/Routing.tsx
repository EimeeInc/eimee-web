import * as React from "react";
import RoutingContext from "@/contexts/Routing";

const Routing = ({ path }: { path: string }) => {
  const routingContext = React.useContext(RoutingContext);

  if (routingContext) {
    routingContext.update(path);
  }

  return <></>;
};

export default Routing;
