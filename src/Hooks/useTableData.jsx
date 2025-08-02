import React from "react";

function useTableData(array, current_page, perPage) {
  let totalPages = Math.ceil(array.length / perPage);
  let start = (current_page - 1) * perPage; //(3-1)*10 = 20
  let end = start + perPage; // 20+20

  return {
    meta: {
      totalPages,
      start,
      end,
    },
    data: array.slice(start, end),
  };
}

export default useTableData;
