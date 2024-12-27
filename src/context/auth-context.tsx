'use client';

import { toast } from '@/hooks/use-toast';
import { getUser } from '@/service/auth.service';
import { User } from '@/types/auth';
import axios from 'axios';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    user: User | null;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | null>(null);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
        const user = await getUser();
        setUser(user.data);
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchUser();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use Auth Context
export const useAuth = () => {
    const userInfo = useContext(AuthContext);

    if (!userInfo) {
        throw new Error(
            'Auth: `useAuth` hook must be wrapped within a `AuthProvider` component',
        );
    }

    return userInfo;
};
