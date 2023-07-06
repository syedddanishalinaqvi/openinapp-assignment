import React from 'react'
import { auth } from "../firebase-config"
import './Css/Dashboard.css'
import Dash from './Images/dashboard_icon.svg'
import Trans from './Images/transaction_icon.svg'
import Schedule from './Images/schedule_icon.svg'
import User from './Images/user_icon.svg'
import Setting from './Images/setting_icon.svg'
import bell from './Images/Vector.svg'
import Revenue from './Images/t_revenue.svg'
import Transactions from './Images/transaction_icon.svg'
import Likes from './Images/likes.svg'
import Users from './Images/user_icon.svg'
import green from './Images/greencircle.svg'
import pink from './Images/pinkcircle.svg'
import tees from './Images/tees.svg'
import pants from './Images/pants.svg'
import hoodies from './Images/hoodies.svg'
import rightarrow from './Images/right_arrow.svg'
import { Chart } from "react-google-charts";



const Dashboard = () => {
  const GraphData = [
    ["Weeks", "User", "Guest"],
    ["Week 1", 100, 200],
    ["Week 2", 500, 460],
    ["Week 3", 150, 300],
    ["Week 4", 450, 540],
  ];

  const GraphOptions = {
    title: "",
    curveType: "function",
    backgroundColor: "transparent",
    legend: "none",
    colors: ['#9BDD7C', '#E9A0A0']
  };

  const PieData = [
    ["Cloths", "Sales"],
    ["Basic Tees", 55],
    ["Pants", 31],
    ["Super Hoodies", 14],

  ];

  const PieOptions = {
    pieSliceText: "none",
    legend: "none",
    pieSliceBorderColor: "transparent",
    slices: { 0: { color: '#98D89E' }, 1: { color: '#EE8484' }, 2: { color: 'F6DC7D' } },
    chartArea: {
      height: "100%",
      width: "100%"
    },
    backgroundColor: "transparent",
  };
  return (
    <div class="d-row">
      <div className="d-column-1">
        <div class="dashboard">
          <div className="title">Board.</div>
          <div className="d-content">
            <div className='d-dash' style={{ fontWeight: "700px" }}><img src={Dash} alt="dash" />Dashboard</div>
            <div className='transactions'><img src={Trans} alt="dash" />Transactions</div>
            <div className='schedules'><img src={Schedule} alt="dash" />Schedules</div>
            <div className='users'><img src={User} alt="dash" />Users</div>
            <div className='settings'><img src={Setting} alt="dash" />Settings</div>
          </div>
          <div className='d-bottom'>
            <div class="help">Help</div>
            <div class="contact">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="d-column-2">
        <div className="header">
          <div className="d-title">Dashboard</div>
          <div className='d-header'>
            <input type="text" className='search' placeholder='Search..' />
            <img src={bell} className='bell' alt="bell" />
            <img src="" className="display-pic" alt="pto" />
          </div>
        </div>
        <div className="cards">
          <div className="card-1">
            <img src={Revenue} alt="/" />
            <p>Total Revenues</p>
            <div>$2,129,430</div>
          </div>
          <div className="card-2">
            <img src={Transactions} alt="/" />
            <p>Total Transactions</p>
            <div>1,520</div>
          </div>
          <div className="card-3">
            <img src={Likes} alt="/" />
            <p>Total Likes</p>
            <div>9,721</div>
          </div>
          <div className="card-4">
            <img src={Users} alt="/" />
            <p>Total Users</p>
            <div>892</div>
          </div>
        </div>
        <div className="graph">
          <div className="nothing">
            <div className="headings">
              <p className="activities">Activities</p>
              <label htmlFor="" className="dates">
                <select>
                  <option class="date">May - June 2021</option>
                </select>
              </label>
            </div>
            <div className="values">
              <div className='user'><img src={green} alt="" />User</div>
              <div className='guest'><img src={pink} alt="" />Guest</div>
            </div>
          </div>
          <div className='main-graph'>
            <Chart
              chartType="LineChart"
              width="1200px"
              height="290px"
              data={GraphData}
              options={GraphOptions}
            />
          </div>
        </div>
        <div className="lower">
          <div className="pie-chart">
            <div className="products">
              <p className="top-products">Top products</p>
              <label htmlFor="" className="sch-date">
                <select>
                  <option class="date">May - June 2021</option>
                </select>
              </label>
            </div>
            <div className="chart">
              <div className="pie">
                <Chart
                  chartType="PieChart"
                  width="134px"
                  height="134px"
                  data={PieData}
                  options={PieOptions}
                />
              </div>
              <div className="types">
                <div className="tees"><img src={tees} alt="" />Basic Tess<br /><span>{PieData[1][1]}%</span></div>
                <div className="pants"><img src={pants} alt="" />Custom Short Pants<br /><span>{PieData[2][1]}%</span></div>
                <div className="hoodies"><img src={hoodies} alt="" />Super Hoodies<br /><span>{PieData[3][1]}%</span></div>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="products">
              <p className="top-products">Top products</p>
              <div class="see-all">See All<img src={rightarrow} alt="" /></div>
            </div>
            <div className="meetings">
              <div className="meeting-1">
                <div className="line-1"></div>
                <div className="meeting-1-details">
                  <div className="meeting-1-title">Meeting with suppliers from Kuta Bali</div>
                  <div className="meeting-1-time">14.00-15.00</div>
                  <div className="meeting-1-place">at Sunset Road, Kuta, Bali</div>
                </div>
              </div>
              <div className="meeting-2">
                <div className="line-2"></div>
                <div className="meeting-2-details">
                  <div className="meeting-2-title">Check operation at Giga Factory 1</div>
                  <div className="meeting-2-time">18.00-20.00</div>
                  <div className="meeting-2-place">at Central Jakarta </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
