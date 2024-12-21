import { orders } from "../../constants/sample-data/orders"
import { DEFAULT_PER_PAGE, Order } from "../../types/sales-dashboard"
import { Pagination } from "../pagination/Pagination"
import usePagination from "../pagination/usePagination"
import { OrderTable } from "./OrderTable"


export const Orders: React.FC = () => {

  const {
    currentPage,
      totalPages,
      handlePrevClick,
      handleNextClick,
      handlePageClick,
    newData,
  } = usePagination({
    perPageRecords: DEFAULT_PER_PAGE,
    data: orders
  })
  
  return (
    <div className="h-max">
      <h2 className="text-4xl font-inter font-medium leading-9.5 tracking[-0.02em] "
        >
              Orders
            </h2>
    <OrderTable orders={newData as unknown as Order[]} />
      <div className="flex w-full justify-center md:justify-end">
        <Pagination
          handleNextClick={handleNextClick}
          handlePageClick={handlePageClick}
          handlePrevClick={handlePrevClick}
          currentPage={currentPage}
          totalPages={totalPages}
          />
      </div>
    </div>
  )
}