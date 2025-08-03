import React, { useState, useMemo, useCallback } from "react";
import useTableData from "../Hooks/useTableData";
import { TABLE_DATA } from "../utils/constants";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import { CiCalendar } from "react-icons/ci";
import { BsX } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

// Styles constants for better maintainability
const STYLES = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px",
    height: "70px",
  },
  buttonContainer: {
    width: "180px",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    padding: "8px",
    backgroundColor: "#f0f0f0dc",
    border: "1px solid #f6e4e4ea",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  actionsContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-around",
  },
  iconButton: {
    borderRadius: "50%",
    padding: "6px",
    background: "#f0f0f0dc",
    cursor: "pointer",
    // transition: "background-color 0.2s ease",
    border: "transparent",
    outline:""

  },
  menteeContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatarContainer: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
  },
  avatar: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  name: {
    margin: 0,
  },
  subtitle: {
    fontSize: "12px",
    color: "gray",
    margin: 0,
  },
  statusText: {
    color: "#999",
    fontSize: "14px",
  },
};

// Action button component for reusability
const ActionButton = ({ icon: Icon, color, title, ...props }) => (
  <Icon
    size={22}
    color={color}
    style={STYLES.iconButton}
    title={title}
    {...props}
  />
);

// Mentee info component for better organization
const MenteeInfo = ({ name, avatar, role = "Student" }) => (
  <div style={STYLES.menteeContainer}>
    <div style={STYLES.avatarContainer}>
      <img
        src={
          avatar ||
          "https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg"
        }
        alt={`${name}'s avatar`}
        style={STYLES.avatar}
      />
    </div>
    <div>
      <p style={STYLES.name}>{name}</p>
      <span style={STYLES.subtitle}>{role}</span>
    </div>
  </div>
);

function CallRecordTable() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, meta } = useTableData(TABLE_DATA, currentPage, perPage);
  const { totalPages } = meta;

  // Memoized render actions to prevent unnecessary re-renders
  const renderActions = useCallback(
    (actions = []) => {
      if (actions.length === 0) {
        return <span style={STYLES.statusText}>Yet to start</span>;
      }

      return (
        <div style={STYLES.actionsContainer}>
          <ActionButton
            icon={IoCallOutline}
            color="green"
            title="Make a call"
          />
          <ActionButton
            icon={CiCalendar}
            color="blue"
            title="Schedule meeting"
          />
          <ActionButton icon={BsX} color="red" title="Cancel meeting" />
        </div>
      );
    },
    []
  );

  // Memoized table rows for better performance
  const tableRows = useMemo(() => {
    return data?.map((item) => (
      <tr key={`${item.name}-${item.date}-${item.agenda}`}>
        <td data-label="Mentee">
          <MenteeInfo name={item.name} />
        </td>
        <td data-label="Agenda">{item.agenda}</td>
        <td data-label="Date">
          <p style={STYLES.name}>{item.date}</p>
          <span style={STYLES.subtitle}>Friday</span>
        </td>
        <td data-label="Time">11:00 AM</td>
        <td data-label="Action">{renderActions(item.actions)}</td>
      </tr>
    ));
  }, [data, renderActions]);

  return (
    <div>
      <div className="container">
        <div style={STYLES.header}>
          <div>
            <SearchInput />
          </div>

          <div style={STYLES.buttonContainer}>
            <button
              style={STYLES.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e0e0e0";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f0f0f0dc";
              }}
            >
              show {perPage} of {meta.totalItems || 12}
            </button>
            <button
              style={STYLES.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e0e0e0";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f0f0f0dc";
              }}
            >
              Date
            </button>
          </div>
        </div>

        <table className="Table" role="table" aria-label="Call records table">
          <thead>
            <tr>
              <th scope="col">Mentee</th>
              <th scope="col">Agenda</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
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
