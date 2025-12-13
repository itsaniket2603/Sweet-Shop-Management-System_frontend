export const isAuthenticated = () => !!localStorage.getItem("token");
export const isAdmin = () => localStorage.getItem("role") === "admin";
