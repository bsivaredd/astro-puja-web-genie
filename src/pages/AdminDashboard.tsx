
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartBar, ChartPie, ChartLine, Settings } from "lucide-react";
import { Image } from "@/components/Image";

interface StatData {
  category: string;
  count: number;
}

interface RevenueData {
  month: string;
  amount: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn || userRole !== "admin") {
      navigate("/login");
    } else {
      setIsAdmin(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Sample statistics data
  const serviceStats: StatData[] = [
    { category: "Astrology Consultations", count: 156 },
    { category: "Puja Services", count: 98 },
    { category: "Gemstone Sales", count: 74 },
    { category: "Vastu Consultations", count: 43 },
  ];

  const revenueData: RevenueData[] = [
    { month: "January", amount: 125000 },
    { month: "February", amount: 142000 },
    { month: "March", amount: 165000 },
    { month: "April", amount: 189000 },
    { month: "May", amount: 210000 },
  ];

  if (!isAdmin) {
    return <div className="p-12 text-center">Checking credentials...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" className="text-white border-white hover:bg-primary/90" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <ChartBar className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Consultations</h3>
              <p className="text-2xl font-bold">371</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <ChartLine className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
              <p className="text-2xl font-bold">₹2,10,000</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <ChartPie className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">New Users</h3>
              <p className="text-2xl font-bold">128</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Statistics */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary/10 p-4 border-b">
              <h2 className="font-playfair text-xl font-bold text-primary">Service Statistics</h2>
            </div>
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Category</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceStats.map((stat) => (
                    <TableRow key={stat.category}>
                      <TableCell>{stat.category}</TableCell>
                      <TableCell className="text-right">{stat.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Revenue Data */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary/10 p-4 border-b">
              <h2 className="font-playfair text-xl font-bold text-primary">Monthly Revenue (₹)</h2>
            </div>
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead className="text-right">Revenue (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueData.map((data) => (
                    <TableRow key={data.month}>
                      <TableCell>{data.month}</TableCell>
                      <TableCell className="text-right">
                        {data.amount.toLocaleString('en-IN')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="outline" className="mr-4">View Website</Button>
          </Link>
          <Button className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Site Settings
          </Button>
        </div>
      </main>
    </div>
  );
}
