export const endpoints = {
    users: {
        getAllUsers: '/users',
        getUserById: (id: number) => `/users/${id}`,    
    },
}