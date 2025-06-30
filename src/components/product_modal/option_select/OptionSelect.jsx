import React, {useRef} from "react";

const OptionSelect = ({ data }) => {
    const btn_move = useRef(null)
  const setActiveBtnHandler = (e) => {
    btn_move.current.style.transform = `translateX(calc(${
      e.target.id * 100
    }% + 3px))`;
  };

  return (
    <div className="option_select_container">
      <div
        className="option_selected"
        style={{ width: 100 / data.length + "%" }}
        ref={btn_move}
      ></div>

      {data?.map((text, index) => {
        return (
          <button
            className="option_select_btn"
            id={index}
            onClick={setActiveBtnHandler}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default OptionSelect;
