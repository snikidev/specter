import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { LIMIT } from "consts";

interface Props {
  columns: GridColDef[];
  rows: Array<any>;
}

const BasicTable = ({ columns, rows }: Props) => {
  return (
    <div className="h-[500px] w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={LIMIT}
        rowsPerPageOptions={[LIMIT]}
      />
    </div>
  );
};

export default BasicTable;
