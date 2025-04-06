import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";

const Dashboard: React.FC = () => {
  const { cards, transactions, weeklyActivity, expenses, balanceHistory } =
    useContext(AppContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="bg-white rounded p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-lg">My Cards</div>
            <button className="text-blue-600 hover:underline">See All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="bg-blue-500 text-white p-4 rounded">
                <div className="text-sm">Balance</div>
                <div className="text-xl font-bold">{card.balance}</div>
                <div className="mt-2 text-sm">{card.cardholder}</div>
                <div className="text-sm">{card.cardNumber}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded p-4">
          <div className="font-semibold text-lg mb-4">Weekly Activity</div>
          <BarChart data={weeklyActivity} />
        </div>

        <div className="bg-white rounded p-4">
          <div className="font-semibold text-lg mb-4">Balance History</div>
          <LineChart data={balanceHistory} />
        </div>
      </div>

      <div className="col-span-1 space-y-6">
        <div className="bg-white rounded p-4">
          <div className="font-semibold text-lg mb-4">Recent Transaction</div>
          <div className="max-h-64 overflow-y-auto space-y-2">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-center">
                <div>
                  <div>{tx.description}</div>
                  <div className="text-sm text-gray-500">{tx.date}</div>
                </div>
                <div
                  className={
                    tx.type === "credit" ? "text-green-500" : "text-red-500"
                  }
                >
                  {tx.type === "credit" ? `+${tx.amount}` : `-${tx.amount}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded p-4">
          <div className="font-semibold text-lg mb-4">Expense Statistics</div>
          <PieChart data={expenses} />
        </div>

        <div className="bg-white rounded p-4">
          <div className="font-semibold text-lg mb-4">Quick Transfer</div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Person1"
                className="rounded-full w-10 h-10"
              />
              <div className="text-sm">Livia Bator</div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Person2"
                className="rounded-full w-10 h-10"
              />
              <div className="text-sm">Eddy Cusuma</div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Person3"
                className="rounded-full w-10 h-10"
              />
              <div className="text-sm">Workman</div>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              placeholder="$25.00"
              className="border p-2 rounded flex-1"
            />
            <button className="bg-blue-600 text-white px-4 rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
