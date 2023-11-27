import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const CardListComp = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  console.log(data)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Ensure data is always an array
  const dataArray = Array.isArray(data) ? data : [];

  // Ensure that dataArray is an array and has a slice method
  const currentItems = dataArray.slice && dataArray.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="card">
      <h1>List</h1>
      <div className="main" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {currentItems.map((elem) => (
            <div key={elem.id} style={{ flexBasis: "15%", margin: "15px", border:"1px solid gray" , borderRadius:"20px" }}>
              <p>Name: {elem.name}</p>
              <div>
                <img src={elem.image} width={100} alt={elem.name} />
              </div>
            </div>
          ))}
      </div>
      <Pagination
        totalItems={dataArray.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CardListComp;
