import React from "react";

export default function Mark({ status }) {
  if (status === false) {
    return <div className="mark" />;
  } else if (status === true) {
    return <div className="mark-green" />;
  }
}
