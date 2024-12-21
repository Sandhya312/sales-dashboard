import React from "react";
import ChatBot from "react-chatbotify";

// Define the type for the form state
interface FormState {
  name?: string;
  sales_target?: string;
  current_sales?: string;
  inventory_status?: string;
  order_tracking?: string;
  customer_feedback?: string;
  marketing_strategy?: string;
  profit_margin?: string;
  sales_performance?: string;
}

const MyChatBot: React.FC = () => {
  const [form, setForm] = React.useState<FormState>({});
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300
  };

  // Define the flow with only e-commerce related questions
  const flow = {
    start: {
      message: "Hello! I’m your E-commerce Assistant. What’s your name?",
      function: (params: { userInput: string }) => setForm({ ...form, name: params.userInput }),
      path: "ask_sales_target"
    },
    ask_sales_target: {
      message: `Nice to meet you, ${form.name}! What’s your sales target for this month?`,
      function: (params: { userInput: string }) => setForm({ ...form, sales_target: params.userInput }),
      path: "ask_current_sales"
    },
    ask_current_sales: {
      message: "Got it! What are your current sales figures for this month?",
      function: (params: { userInput: string }) => setForm({ ...form, current_sales: params.userInput }),
      path: "ask_inventory_status"
    },
    ask_inventory_status: {
      message: "How’s the inventory looking? Do you have enough stock?",
      options: ["Yes", "No", "Need Restocking"],
      function: (params: { userInput: string }) => setForm({ ...form, inventory_status: params.userInput }),
      path: "ask_order_tracking"
    },
    ask_order_tracking: {
      message: "Would you like to track any orders?",
      options: ["Yes", "No"],
      function: (params: { userInput: string }) => setForm({ ...form, order_tracking: params.userInput }),
      path: "ask_customer_feedback"
    },
    ask_customer_feedback: {
      message: "How is customer feedback this month? Any insights?",
      function: (params: { userInput: string }) => setForm({ ...form, customer_feedback: params.userInput }),
      path: "ask_marketing_strategy"
    },
    ask_marketing_strategy: {
      message: "Have you implemented any new marketing strategies recently?",
      options: ["Yes", "No"],
      function: (params: { userInput: string }) => setForm({ ...form, marketing_strategy: params.userInput }),
      path: "ask_profit_margin"
    },
    ask_profit_margin: {
      message: "What’s your profit margin for this month?",
      function: (params: { userInput: string }) => setForm({ ...form, profit_margin: params.userInput }),
      path: "ask_sales_performance"
    },
    ask_sales_performance: {
      message: "How do you evaluate your sales performance so far?",
      options: ["Excellent", "Good", "Average", "Poor"],
      function: (params: { userInput: string }) => setForm({ ...form, sales_performance: params.userInput }),
      path: "end"
    },
    end: {
      message: "Thank you for your input. Here’s a summary of your current data:",
      component: (
        <div style={formStyle}>
          <p>Name: {form.name}</p>
          <p>Sales Target: {form.sales_target}</p>
          <p>Current Sales: {form.current_sales}</p>
          <p>Inventory Status: {form.inventory_status}</p>
          <p>Order Tracking: {form.order_tracking}</p>
          <p>Customer Feedback: {form.customer_feedback}</p>
          <p>Marketing Strategy: {form.marketing_strategy}</p>
          <p>Profit Margin: {form.profit_margin}</p>
          <p>Sales Performance: {form.sales_performance}</p>
        </div>
      ),
      options: ["New Application"],
      chatDisabled: true,
      path: "start"
    },
  };

  return (
    <ChatBot
      settings={{
        general: { embedded: true },
        chatHistory: { storageKey: "ecommerce_dashboard_form" },
      }}
      flow={flow}
    />
  );
};

export default MyChatBot;
