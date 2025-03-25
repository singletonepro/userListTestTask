export interface User {
  id: number;
  name: string;
  description: string;
  role: string;
  email: string;
  avatar: string;
  status: 'active' | 'busy';
}
