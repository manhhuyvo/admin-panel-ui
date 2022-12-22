import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import ListTable from '../../components/table/ListTable'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='single-container'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img 
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="image"
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Eric James</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemValue'>ericjames@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemValue'>+61 412 345 678</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemValue'>120 Spencer St, Melbourne VIC 3000</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemValue'>Australia</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={4.5/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Most Recent Orders</h1>
          <ListTable/>
        </div>
      </div>
    </div>
  )
}

export default Single