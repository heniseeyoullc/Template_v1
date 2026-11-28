import React from "react";

import { DashboardProps } from "../../../types/index.types";

import Container from "../common/Container";

function Dashboard({ className }: DashboardProps) {
  return (
    <Container className={className}>
      {/* Dashboard component goes here */}
    </Container>
  );
}

export default React.memo(Dashboard);
