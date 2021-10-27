import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  onCreateTriggerNotification,
  cancelNotification,
} from '../utils/notifications';

export default () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const notificationTime = useSelector(state => state.notificationShowTime);
  const showNotification = useSelector(state => state.showNotification);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleConfirm = date => {
    setOpen(false);
    setDate(date);
    dispatch({
      type: 'SET_NOTIFICATION_TIME',
      payload: {time: `${date}`, firstTimeOpeningApp: false},
    });
  };
  if (showNotification) {
    onCreateTriggerNotification(notificationTime);
  } else {
    cancelNotification('daily-remainder');
  }

  return (
    <>
      <Button title="Open" onPress={handleOpen} />
      <DatePicker
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
