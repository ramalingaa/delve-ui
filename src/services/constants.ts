import { User } from "../types";

const ProfileCardInfo = [
  {
    id: '1',
    name: 'Karun Kaushik',
    title: 'Co-founder & CEO',
    avatarUrl: '/path-to-avatar.jpg',
    status: {
      onboarding: false,
      backgroundCheck: true,
      training: false,
      performanceEvaluations: false
    }
  },
  // Add more user objects here...
]
const selectedUserInfo: User[] = [
  {
    id: '1',
    name: 'Karun Kaushik',
    title: 'Co-founder & COO',
    email: 'selin@getdelve.com',
    role: 'Administrator',
    avatarUrl: '/path-to-avatar.jpg',
    positionDescription: 'Responsible for overseeing the companys day-to-day operations, ensuring operational excellence, and maintaining compliance with industry regulations, including HIPAA and SOC 2. My role involves strategic planning and execution of company initiatives.',
    todos: [
      { title: 'Complete employee onboarding', status: 'not_completed' as const, dueDate: 'ASAP' },
      { title: 'Conduct background check', status: 'complete' as const, lastCompleted: 'June 18, 2024' },
      { title: 'Send employee compliance to-dos', status: 'not_completed' as const, dueDate: 'ASAP' },
      { title: 'Complete performance evaluation', status: 'not_completed' as const, dueDate: '6/14/24' },
    ]
  },
  // Add more user objects as needed
];
export { ProfileCardInfo, selectedUserInfo }
