import React, { memo } from 'react';

const Memo = memo(
  ({ memo }) => {
    
    return (
      <li>
        {memo}
      </li>
    );
  }
);

export default Memo;