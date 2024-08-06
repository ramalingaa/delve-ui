import React, { useState } from 'react';
import ProfileGrid from './components/profile/ProfileGrid';
import DetailedSidebar from './components/profile/DetailedSidebar';
import Header from './components/layout/Header';
import { User } from './types';
import { selectedUserInfo } from './services/constants';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(() => selectedUserInfo[0]);
  const [activePage, setActivePage] = useState<'Team' | 'Company' | 'Tech' | 'Audits'>('Team');

  return (
    <div className="flex flex-col min-h-screen bg-app-bg text-white">
      <Header activePage={activePage} />
      <div className="h-[4px] bg-gray-800"></div>

      <div className="flex flex-col md:flex-row main-container">
        <main className="flex-1 p-6 flex justify-center">
          <ProfileGrid />
        </main>
        {selectedUser && (
          <DetailedSidebar
            user={selectedUser}
            todos={selectedUser.todos}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;