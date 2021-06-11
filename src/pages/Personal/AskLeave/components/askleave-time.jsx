import * as React from 'react';
import { DatePicker, Typography } from 'antd';
import moment from 'moment';

const { RangePicker: DateRangePicker } = DatePicker;
const { Text } = Typography;

const disabledDate = current => {
  return current && current < moment().endOf('day');
};

const AskleaveForm = props => {
  const { value, onChange } = props;
  const [durationDays, setDurationDays] = React.useState(0);

  const updateDurationDays = (dates, dateStrings) => {
    const duration = moment.duration(dates[1] - dates[0]);
    setDurationDays(duration.days());
    onChange(dates, dateStrings);
  };
  return (
    <React.Fragment>
      <DateRangePicker
        disabledDate={disabledDate}
        format="YYYY-MM-DD"
        value={value}
        onChange={updateDurationDays}
      />
      <Text
        keyboard
        style={{
          marginLeft: 6,
        }}>
        共{durationDays}天
      </Text>
    </React.Fragment>
  );
};

export default AskleaveForm;
