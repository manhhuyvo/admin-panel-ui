import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 class="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featured-chart'>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
            </div>
            <p className="title">Total sales today</p>
            <p className="amount">$420</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included.
            </p>
            <div className='summary'>
                <div className='item'>
                    <div className='item-title'>Target</div>
                    <div className='item-result positive'>
                        <ArrowUpwardIcon fontSize='small' className='item-icon'/>
                        <div className='result-amount'>$12.4K</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item-title'>Target</div>
                    <div className='item-result negative'>
                        <ArrowDownwardIcon fontSize='small' className='item-icon'/>
                        <div className='result-amount'>$12.4K</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item-title'>Target</div>
                    <div className='item-result positive'>
                        <ArrowUpwardIcon fontSize='small' className='item-icon'/>
                        <div className='result-amount'>$12.4K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured