import React, { useState } from 'react';
import { Todo, User } from '../../types';
import profileCardImage from "../../assets/profile-koushik.png"
import dueAsap from '../../assets/due-asap.png'
import { About } from './About';
import { TodoSection } from './Todo';


interface DetailedSidebarProps {
    user: User;
    todos: Todo[];
    onClose: () => void;

}

const DetailedSidebar: React.FC<DetailedSidebarProps> = ({ user, todos }) => {
    const [isAboutOpen, setIsAboutOpen] = useState(true);
    const [isTodoOpen, setIsTodoOpen] = useState(true);

    return (
        <div className="bg-gray-900 h-full relative overflow-y-auto text-white border border-card-border my-3 rounded-lg mx-3 ">
            <div className="flex items-center justify-between mb-6 p-6">
                <div className="flex items-center">
                    <img src={profileCardImage} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-gray-400">{user.title}</p>
                    </div>
                </div>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl border border-card-border rounded-md px-2 py-1">×</button>
            </div>

            <div className="mb-4">
                <div className='flex align-center bg-[#222B3C] px-3 py-1'>
                    <span className={`flex-shrink-0 w-5 h-5 mr-2 rounded-full border-2 flex items-center justify-center
          bg-blue-500 `}>
                        <span className="text-white text-xs">✓</span>
                    </span>
                    <p className=''>About</p>
                </div>

                {isAboutOpen && (
                    <About user={user} />
                )}
            </div>

            <div className='mb-3'>
                <button
                    className="flex gap-2 items-center w-full py-2 px-4 bg-gray-800"
                    onClick={() => setIsTodoOpen(!isTodoOpen)}
                >
                    <span className='border border-card-border rounded-full w-4 h-4'></span>

                    <span className="font-semibold">To-do</span>
                </button>
                {isTodoOpen && (
                    <div className="mt-2 grid grid-cols-2 gap-4 px-3 py-1">
                        {todos.map((todo, index) => (
                            <TodoSection key={index} todo={todo} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailedSidebar;