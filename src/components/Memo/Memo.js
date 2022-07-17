import React, { memo } from "react";
import { MemoDiv } from "../../style/MemoCSS"

const Memo = memo(
  ({ memo }) => {
    
    return (
      <MemoDiv>
        <li>
         {memo}
        </li>
      </MemoDiv>
    );
  }
);

export default Memo;