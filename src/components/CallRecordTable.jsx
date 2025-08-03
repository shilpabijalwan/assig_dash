import React, { useState } from "react";
import useTableData from "../Hooks/useTableData";
import { TABLE_DATA } from "../utils/constants";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";

function CallRecordTable() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, meta } = useTableData(TABLE_DATA, currentPage, perPage);
  const { totalPages } = meta;

  const renderActions = (actions = []) => {
    if (actions.length === 0) {
      return (
        <span style={{ color: "#999", fontSize: "14px" }}>Yet to start</span>
      );
    }
  };
  return (
    <div className="">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px",
            height: "70px",
          }}
        >
          <div>
            <SearchInput />
          </div>

          <div
            style={{
              //   border: "1px solid blue",
              width: "180px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button
              style={{
                padding: "8px",
                backgroundColor: " #f0f0f0dc",
                border: "1px solid #f6e4e4ea ",
                borderRadius: "6px",
              }}
            >
              show 10 of 12
            </button>
            <button
              style={{
                padding: "8px",
                backgroundColor: " #f0f0f0dc",
                border: "1px solid #f6e4e4ea ",
                borderRadius: "6px",
              }}
            >
              Date
            </button>
          </div>
        </div>
        <table className="Table">
          <thead>
            <tr>
              <th>Mentee</th>
              <th>Agenda</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg"
                        alt="avatar"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <span style={{ fontSize: "12px", color: "gray" }}>
                        Student
                      </span>
                    </div>
                  </div>
                </td>
                <td>{item.agenda}</td>
                <td>{item.date}</td>
                <td>11:00 AM</td>
                <td>{renderActions(item.actions)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginationTab">
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CallRecordTable;
