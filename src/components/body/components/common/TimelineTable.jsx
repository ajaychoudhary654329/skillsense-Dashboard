import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import './TimelineTable.css';
import { data1 } from './data1'

const TimelineTable = () => {

    return (
        <table className='timeline-table'>
            <thead >
                <tr>
                    <th></th>
                    <th> Actual Deployed Station </th>
                    <th> Planned Station </th>
                    <th> Shift </th>
                    <th> 4M-MAN </th>
                </tr>
            </thead>
            <tbody>
                {data1.map((item, index) => (
                    <tr
                        key={index}
                        className={item.highlight ? 'highlight-row' : ''}
                    >
                        <td>{item.dateRange}</td>
                        <td><strong>{item.astation}</strong></td>
                        <td>{item.pstation}</td>
                        <td>{item.shift}</td>
                        <td>
                            {item.downloadable && (
                                <DownloadIcon style={{ cursor: 'pointer' }} />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TimelineTable;
