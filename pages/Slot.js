import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { setReset } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux';

function Slot() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const [selectedName, setSelectedName] = useState(null);
  const [btnChange, setBtnChange] = useState(false)
  const router = useRouter();
  console.log('selectedName : ', selectedName)

  const handleReset = () => {
    dispatch(setReset());
    router.push('/');
  }

  const handleSelectRandomName = () => {
    const randomIndex = Math.floor(Math.random() * value.length);
    const selected = value[randomIndex];

    // 안전하게 처리: 선택된 이름이 없을 경우에 대한 확인
    if (selected) {
      setSelectedName(selected);
      setBtnChange(true)
    } else {
      setSelectedName(null); // 또는 원하는 처리를 추가하세요.
    }
    console.log('selectedName : ', selectedName)
  };

  return (
    <div className='slotGrid'>
      <div className='slotTxt'>
        <p style={{ fontSize: '24px', marginBottom: '10px' }}>
          {selectedName}
        </p>
      </div>

      {btnChange === true ? (<Button onClick={() => { handleReset() }}>확인</Button>) : (<Button onClick={() => { handleSelectRandomName() }}>뽑기</Button>)}
    </div>
  );
}

export default Slot;