import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from React Router

function SubmissionHistory() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  console.log(selectedRows);
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 140 },
    { field: "serviceRating", headerName: "Service Rating", width: 160 },
    { field: "beverageRating", headerName: "Beverage Rating", width: 160 },
    { field: "cleanliness", headerName: "Cleanliness", width: 160 },
    { field: "overallRating", headerName: "Overall Rating", width: 160 },
  ];

  const rows = submissions.map((submission, index) => ({
    id: index + 1,
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    serviceRating: submission.serviceRating,
    beverageRating: submission.beverageRating,
    cleanliness: submission.cleanliness,
    overallRating: submission.overallRating,
  }));

  const handleDeleteSelectedRows = () => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setSelectedRows([]);
    localStorage.setItem("submissions", JSON.stringify(remainingRows));
  };

  return (
    <div style={{ height: 400, width: "100%", padding: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Button
          variant="contained"
          color="error"
          disabled={selectedRows.length === 0}
          onClick={handleDeleteSelectedRows}
        >
          Delete Selected Rows
        </Button>
        <Button component={Link} to="/" variant="outlined" color="success">
          Add a Review
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowSelectionModelChange={(ids) => {
          setSelectedRows(ids);
        }}
      />
    </div>
  );
}

export default SubmissionHistory;
