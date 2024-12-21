import moment from "moment";
import { Link } from "react-router-dom";
import { Order } from "../../types/sales-dashboard";
import { LinkArrowIcon } from "../icons/Icons";

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <table
      className="font-inter table-auto text-left mt-5 w-full border-separate border border-gray2 rounded-2xl"
      cellSpacing={0}
    >
      <thead>
        <tr className="bg-[#F9FAFB]">
          <th className="p-tablePadding w-1/5 border-0 border-b rounded-tl-2xl border-b-gray2">
            Product
          </th>
          <th className="p-tablePadding w-1/6 border-0 border-b border-b-gray2">
            Date
          </th>
          <th className="p-tablePadding w-1/6 border-0 border-b border-b-gray2">
            Time spent
          </th>
          <th className="p-tablePadding w-1/6 border-0 border-b border-b-gray2">
            Order Value
          </th>
          <th className="p-tablePadding w-1/6 border-0 border-b border-b-gray2">
            Commission
          </th>
          <th className="p-tablePadding w-1/4 border-0 border-b rounded-tr-2xl border-b-gray2"></th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, index) => (
          <tr key={index}>
            <td className="p-tablePadding">
              <div className="flex gap-4">
                <img src="/assets/HeadPhone.svg" alt="Product Icon" />
                {order?.product}
              </div>
            </td>
            <td className="p-tablePadding">
              <div className="flex flex-col justify-center">
                {moment(order?.date).format("DD-MMM-yyyy")}
                <small className="text-gray1">
                  {moment(order?.date).format("hh:mm a")}
                </small>
              </div>
            </td>
            <td className="p-tablePadding">{order?.timeSpent}</td>
            <td className="p-tablePadding">{order?.orderValue}</td>
            <td className="p-tablePadding font-bold">{order?.commission}</td>
            <td className="p-tablePadding">
              <Link
                className="flex justify-end gap-2 items-center cursor-pointer text-gray1"
                to={order?.chatLink}
                target="_blank"
              >
                View Chat
                <LinkArrowIcon />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
