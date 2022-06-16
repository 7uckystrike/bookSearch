import React, { useState, useRef, useEffect, memo } from 'react';

const AddForm = memo(({ addMemo }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addMemo]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input ref={input} value={value} onChange={onChangeInput} />
      <button type="submit" onClick={addMemo(value)}>
        add
      </button>
    </form>
  );
});

export default AddForm;