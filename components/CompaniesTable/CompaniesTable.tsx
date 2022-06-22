import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { GridColDef } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar from "@mui/material/Snackbar";

import { Table, ExternalIcon, Number } from "components";
import { fetchCompanies } from "api";
import Alert from "./Alert";

const columns: GridColDef[] = [
  { field: "Rank", headerName: "Rank", width: 80 },
  { field: "Company Name", headerName: "Company Name", width: 150 },
  { field: "Founded Date", headerName: "Founded Date", width: 130 },
  { field: "Industry", headerName: "Industry", width: 130 },
  {
    field: "Total Funding Amount (in USD)",
    headerName: "Total Funding Amount (in USD)",
    width: 220,
    renderCell: ({ value }) => <Number>{value}</Number>,
  },
  { field: "Last Funding Type", headerName: "Last Funding Type", width: 150 },
  {
    field: "Number of Investors",
    headerName: "Number of Investors",
    width: 150,
  },
  { field: "Company Size", headerName: "Company Size", width: 150 },
  {
    field: "Website",
    headerName: "Website",
    width: 80,
    renderCell: ({ value }) => (
      <a href={value} target="_blank" rel="noreferrer">
        <ExternalIcon />
      </a>
    ),
  },
];

const CompaniesTable = () => {
  const [error, setError] = useState(false);
  // TODO: custom pagination with custom query name, e.g. companies-page-1
  const { isLoading, data = [] } = useQuery("companies", fetchCompanies, {
    onError: () => {
      setError(true);
    },
  });

  const rows = useMemo(
    // TODO: type all the returned apis
    // @ts-ignore
    () => data.map(({ Rank, ...company }) => ({ id: Rank, Rank, ...company })),
    [data]
  );

  return (
    <>
      <Table
        columns={columns}
        rows={rows}
        components={{
          LoadingOverlay: LinearProgress,
        }}
        loading={isLoading}
      />
      <Snackbar open={error} autoHideDuration={600}>
        <Alert severity="error">
          Something went wrong when fetching the companies. Please, try
          reloading the page.
        </Alert>
      </Snackbar>
      {/* TODO: onRowClick to display a modal */}
    </>
  );
};

export default CompaniesTable;
