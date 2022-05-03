import React, { useState, useCallback } from "react";
import "./Write.css";

function Write({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <div className="writePage">
      <form className="writeInsert" onSubmit={onSubmit}>
        <input
          placeholder="제목을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Write;
