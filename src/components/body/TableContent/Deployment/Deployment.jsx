import React, { useState } from 'react'
import { SelectBox2 } from '../../components/common/SelectBox2';
import './Deployment.css';
import TimelineTable from '../../components/common/TimelineTable';

const Deployment = () => {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [station, setStation] = useState('');
  const [shift, setShift] = useState('');

  return (

    <>
      <div className='select-container'>

        <SelectBox2 label={'From'} options={[{ label: "1/12/2023", value: "1/12/2023" }, { label: "2/12/2023", value: "2/12/2023" }, { label: '3/12/2023', value: '3/12/2023' }, { label: '4/12/2023', value: '4/12/2023' }]} width='160px' />
        <SelectBox2 label={'To'} options={[{ label: "30/12/2023", value: "30/12/2023" }, { label: "29/12/2023", value: "29/12/2023" }, { label: '28/12/2023', value: '28/12/2023' }, { label: '27/12/2023', value: '27/12/2023' }]} width='160px' />
        <SelectBox2 label={'Station'} options={[{ label: 'All', value: 'All' }, { label: 'Station1 ', value: 'station1' }, { label: 'Station2', value: 'Station2' }, { label: 'Station3', value: 'Station3' }]} width='160px' />
        <SelectBox2 label={'Shift'} options={[{ label: 'All', value: 'All' }, { label: 'half-day ', value: 'half-day' }, { label: 'full-day', value: 'full-day' }, { label: 'semi-day', value: 'semi-day' }]} width='160px' />

      </div>

      <div className='table-body'>

        <TimelineTable />

      </div>


    </>
  )
}

export default Deployment;