import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';

export default () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  const handleConfirm = date => {
    setOpen(false);
    setDate(date);
    dispatch({
      type: 'SET_NOTIFICATION_TIME',
      payload: {time: `${date}`, firstTimeOpeningApp: false},
    });
  };

  return (
    <>
      <DatePicker
        title="set daily remainder time"
        modal
        open={open}
        date={date}
        mode="time"
        onConfirm={date => handleConfirm(date)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
