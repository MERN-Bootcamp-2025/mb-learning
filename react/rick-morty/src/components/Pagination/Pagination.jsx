import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // let prev = ()=>{
  //     if(pageNumber===1) return;
  //     setPageNumber(pg=>pg-1);
  // };
  // let next = ()=>{
  //     setPageNumber(pg=>pg+1);
  // }

  return (
    // <div className="container d-flex justify-content-center mb-5 gap-5" >
    //   <button onClick={prev} className="btn btn-primary">Prev</button>
    //   <button onClick={next} className="btn btn-primary">Next</button>
    // </div>
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber===1 ? 0 : pageNumber-1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data)=>{
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
