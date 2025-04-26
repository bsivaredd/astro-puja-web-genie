
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { Image } from "@/components/Image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple mock login for demo purposes
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        toast.success("Login successful");
        localStorage.setItem("userRole", "user");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else if (email === "admin@example.com" && password === "admin123") {
        toast.success("Admin login successful");
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/admin-dashboard");
      } else {
        toast.error("Invalid credentials");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative hero-gradient text-white py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1515705576963-95cad62945b6"
            alt="Stars background"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-6">
            <Link to="/" className="text-white hover:text-white/80">← Back to Home</Link>
          </nav>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center">User Login</h1>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-playfair font-bold text-center text-primary mb-6">
            Sign In to Your Account
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="#" className="text-primary hover:text-primary/80">
                  Forgot your password?
                </Link>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                Register
              </Link>
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-amber-50 rounded border border-amber-200">
            <p className="text-sm text-center text-amber-800">
              <strong>Demo Credentials:</strong><br />
              User: user@example.com / password<br />
              Admin: admin@example.com / admin123
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
