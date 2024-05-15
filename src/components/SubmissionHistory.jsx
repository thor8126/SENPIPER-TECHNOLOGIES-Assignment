import React from "react";

function SubmissionHistory() {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Submission History</h2>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Service Rating</th>
            <th className="px-4 py-2">Beverage Rating</th>
            <th className="px-4 py-2">Cleanliness</th>
            <th className="px-4 py-2">Overall Rating</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{submission.name}</td>
              <td className="border px-4 py-2">{submission.email}</td>
              <td className="border px-4 py-2">{submission.phone}</td>
              <td className="border px-4 py-2">{submission.serviceRating}</td>
              <td className="border px-4 py-2">{submission.beverageRating}</td>
              <td className="border px-4 py-2">{submission.cleanliness}</td>
              <td className="border px-4 py-2">{submission.overallRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionHistory;
