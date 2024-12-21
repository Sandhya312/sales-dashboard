
interface PaginationProps {
  handlePageClick: (page: number) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  handlePrevClick,
    handleNextClick,
    handlePageClick,
  currentPage,
  totalPages,
}) => {
  
  return (
    <div className="flex justify-center items-center gap-2 p-3 w-max rounded-full my-5 mx-3">
      <button  className="bg-white text-green1 rounded-full flex justify-center items-center w-7 h-7 drop-shadow-lg transition-all duration-400 ease-in-out focus:bg-green1 disabled:cursor-not-allowed focus:text-white" onClick={() => handlePrevClick()}
        disabled= {currentPage===1}
        >
        {'< '}  
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
           <button className={
             `rounded-full transition-all duration-300 ease-in-out flex justify-center items-center w-10 h-10 drop-shadow-lg ${currentPage === index+1 ? 'bg-green1 text-white': 'bg-white text-green1'}`} 
      key={index}
      onClick={() =>handlePageClick(index+1)}
        >
          {index + 1}
        </button>
      ))}
      <button  className="bg-white text-green1 rounded-full flex justify-center items-center w-7 h-7 drop-shadow-lg transition-all duration-300 ease-in-out focus:bg-green1 disabled:cursor-not-allowed focus:text-white" onClick={() => handleNextClick()}
        disabled= {currentPage===totalPages}
        >
        {'> '}
      </button>
    </div>
  )
}