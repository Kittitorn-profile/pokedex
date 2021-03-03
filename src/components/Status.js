import React from "react";

const StatusItem = ({ status }) => {
  return (
    <div class="progress" style={{ height: 30, borderRadius: 20 }}>
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${status}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default StatusItem;
