import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import { Sidebar } from "./Sidebar";

const columns = [
  { field: "id", headerName: "id", width: 70 },
  { field: "sessionId", headerName: "session ID", width: 100 },
  { field: "mentorName", headerName: "Mentor name", width: 130 },
  { field: "mentorFeedback", headerName: "Mentor Feedback", width: 300 },
  { field: "menteeName", headerName: "Mentee name", width: 130 },
  { field: "menteeFeedback", headerName: "Mentee Feedback", width: 300 },
  { field: "actionButton", headerName: "Action", width: 150, renderCell: (params) => {
    return <Button variant="outlined">Raise Issue</Button>
  } },
];

const rows = [
  { id: 1, sessionId: "0001", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the" },
  { id: 2, sessionId: "0002", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 3, sessionId: "0003", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 4, sessionId: "0004", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 5, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 6, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 7, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 8, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 9, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
  { id: 10, sessionId: "0005", mentorName: "Charvi", mentorFeedback: "Lorem Ipsum is simply dummy text of the", menteeName: "Rohit", menteeFeedback: "Lorem Ipsum is simply dummy text of the"},
];

export const CDFeedback = () => {
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
