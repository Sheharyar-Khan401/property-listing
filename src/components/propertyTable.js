import React, { useState } from 'react';

const PropertyTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortKey, setSortKey] = useState(''); // Track the current sorting key
  const [sortAscending, setSortAscending] = useState(true); // Track sorting order
  const itemsPerPage = 10; // Adjust as needed

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
  const displayedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <table className="hover:table-auto">
        <thead>
          <tr>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('address')}>Address</th>
            <th onClick={() => handleSort('beds')}>Beds</th>
            <th onClick={() => handleSort('bath')}>Bath</th>
            <th onClick={() => handleSort('coveredAreaSQFT')}>Covered Area (sqft)</th>
            <th onClick={() => handleSort('propertyType')}>Property Type</th>
            <th onClick={() => handleSort('isCommercial')}>Is Commercial</th>
            <th onClick={() => handleSort('price')}>Price</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((property, index) => (
            <tr className="hover:bg-sky-100" key={index}>
              <td>{property.title}</td>
              <td>{property.address}</td>
              <td>{property.beds}</td>
              <td>{property.bath}</td>
              <td>{property.coveredAreaSQFT}</td>
              <td>{property.propertyType}</td>
              <td>{property.isCommercial ? 'Yes' : 'No'}</td>
              <td>{property.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
