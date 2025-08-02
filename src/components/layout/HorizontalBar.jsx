import React, { useEffect, useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";

function HorizontalBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loginDetail = localStorage.getItem("loginDetail");
    if (loginDetail) {
      const parsed = JSON.parse(loginDetail);
      setUserData(parsed);
    }
  }, []);
  return (
    <div className="horizontal-bar">
      <h3 style={{ textTransform: "capitalize" }}>
        Welcome! {userData?.email?.split("@")[0]}
      </h3>

      <div
        style={{
          display: "flex",
          // border: "1px solid blue",
          // marginRight: "30px",
          width: "200px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <BiSearch size={20} />
        <BiBell size={20} />

        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://cdn.dribbble.com/userupload/27341424/file/original-7526e60193cff69cba7dc1cf48a696d6.png?resize=400x300"
            alt="img"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalBar;
