import React, { ComponentProps } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LIMIT } from "consts";

const BasicTable = (props: ComponentProps<typeof DataGrid>) => {
  return (
    <div className="h-[500px] w-full">
      <DataGrid pageSize={LIMIT} rowsPerPageOptions={[LIMIT]} {...props} />
    </div>
  );
};

export default BasicTable;
