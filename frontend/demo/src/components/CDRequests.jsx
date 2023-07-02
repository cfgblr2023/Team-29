import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Sidebar } from "./Sidebar";

const columns = [
  { field: "id", headerName: "id", width: 70 },
  { field: "requestId", headerName: "reqId ID", width: 100 },
  { field: "raisedBy", headerName: "Raised by", width: 130 },
  { field: "type", headerName: "Type of Request", width: 300 },
  { field: "problems", headerName: "Conflicts", width: 130 },
  {
    field: "rejectButton",
    headerName: "Reject",
    width: 150,
    renderCell: (params) => {
      return (
        <Button variant="outlined" color="error">
          Reject
        </Button>
      );
    },
  },
  {
    field: "approveButton",
    headerName: "Approve",
    width: 150,
    renderCell: (params) => {
      return <Button variant="outlined">Approve</Button>;
    },
  },
];

const rows = [
  {
    id: 1,
    requestId: "00001",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 2,
    requestId: "00002",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 3,
    requestId: "00003",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 4,
    requestId: "00004",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 5,
    requestId: "00005",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 6,
    requestId: "00006",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 7,
    requestId: "00007",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 8,
    requestId: "00008",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 9,
    requestId: "00009",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
  {
    id: 10,
    requestId: "00010",
    raisedBy: "Rohit",
    type: "MENTOR CHANGE",
    problems: "None",
  },
];

export const CDRequests = () => {
  return (
    <div className="cd-horizontal-container">
      <Sidebar />
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          className="mentee-table"
        />
      </div>
    </div>
  );
};
