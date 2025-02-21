import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface SaleSummary {
    salesSummaryId: number;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary {
    purchaseSummaryId: number;
    totalPurchased: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseSummary {
    expenseSummaryId: number;
    totalExpenses: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: number;
    category: string;
    amount: string;
    date: string;
}

export interface DashboardMetrics {
    popularProducts: Product[]; 
    saleSummary: SaleSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"],
        }),
    }),
});

export const { 
    useGetDashboardMetricsQuery
} = api;
