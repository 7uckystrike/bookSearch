import React, { useState, useCallback, useEffect, useRef } from 'react';
import AddForm from './AddForm';
import Memo from "./Memo"

const MemoList = () => {
  const [memoList, setMemoList] = useState([]);
  const [id, setId] = useState(0);
  const isMount = useRef(true);

  useEffect(() => {
    if(!isMount.current) {
      localStorage.setItem('memoList', JSON.stringify(memoList));
      localStorage.setItem('id', id);
    }
  }, [memoList, id])

  useEffect(() => {
    const localMemoList = localStorage.getItem('memoList');
    if (localMemoList) {
      setMemoList(JSON.parse(localMemoList))
    }
    const localId = localStorage.getItem('id');
    if (localId) {
      setId(parseInt(localId));
    }
    isMount.current = false;
  },[])

  const addMemo = useCallback(
    (memo) => (event) => {
      event.preventDefault();
      if (memo) {
        setMemoList((prev) => [
          ...prev,
          { id: id, memo: memo }
        ])
        setId((prevId) => prevId + 1); 
      }
    }, [id]
  );

  return (
    <div>
      <div>
        <AddForm addMemo={addMemo} />
        <ul>
          {memoList.map((memoInfo) => {
            return (
              <Memo
                key={memoInfo.id}
                id={memoInfo.id}
                memo={memoInfo.memo}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
  export default MemoList
