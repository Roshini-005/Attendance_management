import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' })
api.interceptors.request.use((config) => { const token = localStorage.getItem('ams_token'); if (token) config.headers.Authorization = `Bearer ${token}`; return config })
export const authApi = { login: (payload) => api.post('/auth/login', payload), register: (payload) => api.post('/auth/register', payload) }
export const setupApi = { admin: (payload) => api.post('/auth/setup-admin', payload) }
export const dashboardApi = { admin: () => api.get('/admin/dashboard'), faculty: () => api.get('/faculty/dashboard'), student: () => api.get('/student/dashboard') }
export const studentsApi = { list: () => api.get('/students'), create: (payload) => api.post('/students', payload), update: (id, payload) => api.put(`/students/${id}`, payload), remove: (id) => api.delete(`/students/${id}`) }
export const facultyApi = { list: () => api.get('/faculty'), create: (payload) => api.post('/faculty', payload), update: (id, payload) => api.put(`/faculty/${id}`, payload), remove: (id) => api.delete(`/faculty/${id}`) }
export const departmentsApi = { list: () => api.get('/departments'), create: (payload) => api.post('/departments', payload), update: (id, payload) => api.put(`/departments/${id}`, payload), remove: (id) => api.delete(`/departments/${id}`) }
export const subjectsApi = { list: () => api.get('/subjects'), create: (payload) => api.post('/subjects', payload), update: (id, payload) => api.put(`/subjects/${id}`, payload), remove: (id) => api.delete(`/subjects/${id}`), students: (id) => api.get(`/subjects/${id}/students`) }
export const enrollmentApi = { list: (subjectId) => api.get(`/enrollments/${subjectId}`), create: (payload) => api.post('/enrollments', payload), remove: (id) => api.delete(`/enrollments/${id}`) }
export const attendanceApi = { list: (params) => api.get('/attendance', { params }), save: (payload) => api.post('/attendance', payload), update: (id, payload) => api.put(`/attendance/${id}`, payload) }
export default api
