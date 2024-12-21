import { useState } from "react";
import { DEFAULT_PER_PAGE } from "../../types/sales-dashboard";

type UsePaginationProps = {
  perPageRecords?: number;
  data: any[];
};

const usePagination = ({
  perPageRecords = DEFAULT_PER_PAGE,
  data,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
const totalPages = Math.ceil(data.length / perPageRecords);

  const handlePageClick = (page:number) => {
    setCurrentPage(page);
  }

  const handlePrevClick = () => {
    if (currentPage>1) {
      setCurrentPage(currentPage-1);
    }else {
      setCurrentPage(currentPage);
    }
  }
  const handleNextClick = () => {
    if (currentPage<totalPages) {
      setCurrentPage(currentPage+1);
    }else {
      setCurrentPage(currentPage);
    }
  }

  const start = (currentPage - 1) * perPageRecords;
  const end = start + perPageRecords;
  const newData = data.slice(start, end);

  return {
    currentPage,
    totalPages,
    handlePrevClick,
    handleNextClick,
    handlePageClick,
    newData,
  }

}

export default usePagination;