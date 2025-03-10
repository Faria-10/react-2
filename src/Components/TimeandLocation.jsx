import React from "react";

const TimeandLocation = ({ dateTime }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {/* YA CONDITON LAGAI HOI TRUE FALSE KI KY AGAR TIME AVAILABILE HY TO A JAY GA WRNA FETCHING A JAY GA? */}
          {dateTime ? dateTime : "Fetching time..."}
        </p>
      </div>
    </div>
  );
};

export default TimeandLocation;
