import React, { useState } from "react";
import CallRecordTable from "../components/CallRecordTable";
import { TABLE_DATA } from "../utils/constants";
import PastCallRecord from "../components/PastCallRecord";

export const TAB = [
  {
    title: "Upcomming",
    component: CallRecordTable,
  },
  { title: "Past", component: PastCallRecord },
];
function CallRecord() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = TAB[activeTab].component;
  return (
    <div className="Table-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px",
        }}
      >
        <div>
          <h3>Call Records</h3>
          <p style={{ color: "gray", fontSize: "12px" }}>
            Overall{" "}
            <span style={{ fontWeight: "bold" }}>
              {activeTab == 0 ? TABLE_DATA.length : 0}
            </span>
          </p>
        </div>

        <div className="Tabbar-container">
          {TAB?.map((ele, ind) => (
            <div
              className={`${ind == activeTab ? "active-tab" : "notActive"}`}
              onClick={() => setActiveTab(ind)}
            >
              {ele.title}
            </div>
          ))}
        </div>
      </div>
      <ActiveComponent />
    </div>
  );
}

export default CallRecord;
