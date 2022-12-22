import React from 'react'
import './widget.scss'
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';

const Widget = ({type}) => {
    let data;

    // Temporary data
    const amount= 100;
    const different = 20;

        switch(type){
            case "user":
                data={
                    title: "USERS",
                    isMoney: false,
                    link: "See all users",
                    icon: (
                        <Person2OutlinedIcon className='icon'
                            style={{backgroundColor: '#FFCAC8', color: '#EB455F'}}
                        />
                    )
                };
                break;
            case "order":
                data={
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: (
                        <ShoppingCartOutlinedIcon className='icon' 
                            style={{backgroundColor: '#FFF6C3', color: '#F49D1A'}}B6E2A1
                        />
                    )
                };
                break;
            case "earning":
                data={
                    title: "REVENUE",
                    isMoney: true,
                    link: "View total revenue",
                    icon: (
                        <AttachMoneyOutlinedIcon className='icon'
                            style={{backgroundColor: '#B6E2A1', color: '#379237'}}F3CCFF
                        />
                    )
                };
                break;
            case "balance":
                data={
                    title: "BALANCE",
                    isMoney: true,
                    link: "See details",
                    icon: (
                        <WalletOutlinedIcon className='icon'
                            style={{backgroundColor: '#F3CCFF', color: '#810CA8'}}
                        />
                    )
                };
                break;
            default:
                break;
        }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link} <ArrowForwardOutlinedIcon className='iconnext'/></span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <NorthEastOutlinedIcon className='diff-icon'/>
                {different}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget