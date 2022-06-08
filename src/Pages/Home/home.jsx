import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "antd/lib/transfer/search";
import { Input,  } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Link, useHistory } from "react-router-dom";
import data from "../../Components/Data/data";
import '../Home/home.css'


const Home = () => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
 
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}

  const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
      //@ts-ignore
      render: (x, y, index) => index + 1
    },

    {
      title: ' Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      
    },
    {
      title: 'Product Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={(e) => history.push('/users/edit/:id')}>EDIT<EditOutlined /> </a>
          <a>DELETE <DeleteOutlined /></a>
        </Space>
      ),
    },
  ];
  
  return (
    <div className="container">
      <div className="py-4">
        <h1>HOME PAGE</h1>
        <div className="table-search-bar ">
          <div>

          <Input
           placeholder="Search"
           onChange={(e) => searchItems(e.target.value)}
           
           />
           </div>
           <div>
              <Button
              onClick={() => history.push('/users/add')} 
              type="primary
              ">Add Items
              </Button>
          {/* <SearchOutlined /> */}
           </div>
         </div>
         <Card className='table-card'>
        <Table
        className="item-data-table" 
        columns={ columns} 
        dataSource={ searchInput.length > 1 ? filteredResults : data}
        pagination={{
          current:page,
          pageSize:pageSize,
          total: data.length,
          onChange:(page, pageSize) => {
            setPage(page)
            setPageSize(pageSize);
          }
        }}

        />
        </Card>
      </div>
    </div>
  );
};

export default Home;
