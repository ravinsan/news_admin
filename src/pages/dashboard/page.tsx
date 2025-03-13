import { DollarSign, ShoppingCart, TrendingUp, User } from "lucide-react";

export default function Page() {
  const stats = [
    { title: "Users", value: 207, bg: "bg-blue-100", icon: <User className="text-blue-500" size={24} /> },
    { title: "Revenue", value: 299, bg: "bg-green-100", icon: <DollarSign className="text-green-500" size={24} /> },
    { title: "Sales", value: 49, bg: "bg-yellow-100", icon: <ShoppingCart className="text-yellow-500" size={24} /> },
    { title: "Performance", value: 882, bg: "bg-red-100", icon: <TrendingUp className="text-red-500" size={24} /> },
  ];
  return (
    
        <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-100 min-h-screen">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <div key={index} className={`${item.bg} p-4 rounded-xl shadow-md flex justify-between items-center`}>
                <div>
                  <p className="text-gray-600">{item.title}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
                {item.icon}
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["bg-gradient-to-r from-blue-400 to-blue-600", "bg-gradient-to-r from-green-400 to-green-600", "bg-gradient-to-r from-purple-400 to-purple-600"].map((bgColor, index) => (
                <div 
                  key={index} 
                  className={`${bgColor} aspect-video rounded-xl shadow-lg flex items-center justify-center text-white font-semibold text-xl transition-transform transform hover:scale-105`}
                >
                  Card {index + 1}
                </div>
              ))}
            </div>

          {/* Content Section */}
          <div className="min-h-[50vh] rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Welcome to the Dashboard</h2>
            <p className="text-gray-600 mt-2">This is a simple layout with stats, cards, and a content section.</p>
          </div>
        </div>
  );
}

