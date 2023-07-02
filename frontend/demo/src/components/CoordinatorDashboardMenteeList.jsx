import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { Sidebar } from "./Sidebar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "progress", headerName: "Progress", width: 150, renderCell: (params) => {
    return <LinearProgress variant="determinate" value={100}/> 
  } },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, progress: 50 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, progress: <LinearProgress variant="determinate" value={50} />  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, progress: <LinearProgress variant="determinate" value={20} />},
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, progress: <LinearProgress variant="determinate" value={10} /> },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 60, progress: <LinearProgress variant="determinate" value={30} /> },
  { id: 6, lastName: "Melisandre", firstName: "Person", age: 150,  progress: <LinearProgress variant="determinate" value={40} />},
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, progress: <LinearProgress variant="determinate" value={10} /> },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, progress: <LinearProgress variant="determinate" value={60} /> },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, progress: <LinearProgress variant="determinate" value={90} /> },
];

export const CoordinatorDashboardMenteeList = () => {
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
