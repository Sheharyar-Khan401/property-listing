import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaSort } from 'react-icons/fa'

const PropertyTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortKey, setSortKey] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [searchQuery, setSearchQuery] = useState('')
  // const [filteredData, setFilteredData] = useState([])

  
  const navigate = useNavigate()
  const itemsPerPage = 30;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortAscending(!sortAscending);
    } else {
      setSortKey(key);
      setSortAscending(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    if (sortAscending) {
      return valueA?.toString().localeCompare(valueB?.toString());
    } else {
      return valueB?.toString().localeCompare(valueA?.toString());
    }
  });

  const pageCount = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  // const displayedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const filteredData = sortedData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(startIndex, startIndex + itemsPerPage);;

  console.log('filteredData', filteredData)
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };


  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded-lg px-2 py-1 mb-4 active:border-neutral-100 focus:border-neutral-100"
          placeholder="Search by title or address"
        />
      </div>
      <div className='rounded-lg border-x' style={{
        height: '35rem',
        overflowY: 'scroll'
      }}>
        <table className="table-fixed shadow-lg bg-white">
          <thead>
            <tr>
              <th className='bg-blue-100 text-left px-4 py-4 w-48' onClick={() => handleSort('title')}>
                <div className='flex items-center justify-around'>
                  Title <FaSort />
                </div>
              </th>
              <th className='bg-blue-100 text-left px-8 py-4' onClick={() => handleSort('address')}>
                <div className='flex items-center justify-around'>
                  Address <FaSort />
                </div>
              </th>
              <th className='bg-blue-100 text-center px-8 py-4' onClick={() => handleSort('coveredAreaSQFT')}>
                <div className='flex items-center justify-around'>
                  Covered Area <FaSort />
                </div>
              </th>
              <th className='bg-blue-100 text-center px-8 py-4' onClick={() => handleSort('propertyType')}>
                <div className='flex items-center justify-around'>
                  Property Type <FaSort />
                </div>
              </th>
              <th className='bg-blue-100 text-center px-8 py-4' onClick={() => handleSort('price')}>
                <div className='flex items-center justify-around'>
                  Price <FaSort />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((property, index) => (
              <tr className="hover:bg-sky-100 border-b" key={index} onClick={() => { navigate('/details', { state: property }) }}>
                <td className='p-2 py-4'>{property.title}</td>
                <td className='p-2 py-4'>{property.address}</td>
                <td className='text-center p-2 py-4'>{property.coveredAreaSQFT}</td>
                <td className='text-center p-2 py-4'>{property.propertyType}</td>
                <td className='text-center p-2 py-4'>{property.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={index === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyTable;
