import React, { useState, useRef, useEffect, memo } from "react"
import {AddFormDiv} from "../../style/MemoCSS"
import moment from 'moment';

const AddForm = memo(({ addMemo }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);
  const nowTime = moment().format('YY년 MM월 DD일 HH시 mm분');

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addMemo]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    if(value.length > 130) {
      alert("최대 130자까지 가능합니다.")
    }
  };


  return (
    <AddFormDiv>
      <span className='time'>{nowTime}</span>
      <p className='title'>지금 이 시각, 당신이 좋아하는 문장은</p>
      <form className='form'>
        <textarea 
          className='area'
          ref={input} 
          value={value} 
          onChange={onChangeInput} 
          />
        <button 
          className='button'
          type='submit'
          onClick={addMemo(value)}>
          등록
        </button>
      </form>
    </AddFormDiv>
  );
});

export default AddForm;