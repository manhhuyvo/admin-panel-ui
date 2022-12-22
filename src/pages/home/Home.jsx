import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar' 
import Widget from '../../components/widget/Widget' 
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import ListTable from '../../components/table/ListTable'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='home-container'>
            <Navbar />
            <div className='widgets'>
                <Widget type='user'/>
                <Widget type='order'/>
                <Widget type='earning'/>
                <Widget type='balance'/>
            </div>
            <div className='charts'>
                <Featured />
                <Chart aspect={3/1} title="Last 6 Months Revenue"/>
            </div>
            <div className='list-container'>
                <div className='list-title'>Latest Transaction</div>
                <ListTable />
            </div>
        </div>
    </div>
  )
}

export default Home