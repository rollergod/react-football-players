import React from "react";
import ReactPaginate from "react-paginate";
import styles from './Paginate.module.scss';

const Paginate = ({ totalItems, playersPerPage, onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={totalItems / playersPerPage}
            renderOnZeroPageCount={null}
        />
    )
};

export default Paginate;