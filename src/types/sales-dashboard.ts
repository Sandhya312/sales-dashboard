
import React from "react";
import { ConsultationIcon, OrderPlacedIcon, ConversionIcon, TotalSalesValueIcon, AvgOrderValueIcon, CommissionPaidIcon } from "../components/icons/Icons";


export enum DashboardMetric {
  Consultation = "consultations",
  OrderPlaced = "ordersPlaced",
  Conversion = "conversion",
  TotalSalesValue = "totalSalesValue",
  AvgOrderValue = "avgOrderValue",
  CommissionPaid = "commissionPaid",
}

export const iconMapping: Record<string, React.FC> = {
  [DashboardMetric.Consultation]: ConsultationIcon,
  [DashboardMetric.OrderPlaced]: OrderPlacedIcon,
  [DashboardMetric.Conversion]: ConversionIcon,
  [DashboardMetric.TotalSalesValue]: TotalSalesValueIcon,
  [DashboardMetric.AvgOrderValue]: AvgOrderValueIcon,
  [DashboardMetric.CommissionPaid]: CommissionPaidIcon
}

export type Order = {
    product: string;
    date: string;
    timeSpent: string;
    orderValue: string;
    commission: string;
    chatLink: string;
  };

export const DEFAULT_PER_PAGE = 5;
export const DEFAULT_START_PAGE = 1;