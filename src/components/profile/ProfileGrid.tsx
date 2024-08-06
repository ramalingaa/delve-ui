import React from 'react';
import ProfileCard from './ProfileCard';
import { User, UserCard } from '../../types';
import { ProfileCardInfo } from '../../services/constants';

interface ProfileGridProps {

}

const ProfileGrid: React.FC<ProfileGridProps> = () => {
    return (
        <div className="relative max-w-[450px] flex flex-col">
            <div>
                {ProfileCardInfo.map((user) => (
                    <ProfileCard
                        user={user}
                        onStatusChange={(userId, status) => {
                            console.log(`Status changed for user ${userId}: ${status}`);
                            // Update user status in your state management system here
                        }}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center">
                <div className="bg-blue-500 h-[300px] w-1 top-1/2 left-0 flex items-center justify-center">

                </div>
            </div>
            <div>
                {ProfileCardInfo.map((user) => (
                    <ProfileCard
                        user={user}
                        onStatusChange={(userId, status) => {
                            console.log(`Status changed for user ${userId}: ${status}`);
                            // Update user status in your state management system here
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileGrid;