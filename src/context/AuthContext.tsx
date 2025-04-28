import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  adminLogin: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setIsAdmin(parsedUser.role === 'admin');
    }
  }, []);

  const login = async (_email: string, _password: string): Promise<boolean> => {
    try {
      const mockUser = {
        id: '1',
        name: 'Test User',
        email: _email,
        role: 'user' as const
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      setIsAdmin(false);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const adminLogin = async (email: string, _password: string): Promise<boolean> => {
    try {
      if (email === 'sudhagarambur@gmail.com' && _password === 'Sudha@2025') {
        const mockAdmin = {
          id: 'admin1',
          name: 'Sudhagar Ambur',
          email,
          role: 'admin' as const
        };
        
        setUser(mockAdmin);
        setIsAuthenticated(true);
        setIsAdmin(true);
        localStorage.setItem('user', JSON.stringify(mockAdmin));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Admin login failed:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, _password: string): Promise<boolean> => {
    try {
      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user' as const
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      setIsAdmin(false);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    isAdmin,
    login,
    adminLogin,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
