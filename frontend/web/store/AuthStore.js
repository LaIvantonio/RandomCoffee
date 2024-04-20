import create from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    userData: null,
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
    setUserData: (data) => set({ userData: data }),
    clearAuthState: () => set({ isAuthenticated: false, userData: null }),
}));

export default useAuthStore;
