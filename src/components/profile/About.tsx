import { User } from "../../types";

export const About: React.FC<{ user: User }> = ({ user }) => {
    return (
        <div className="mt-2 space-y-4 px-3 py-1">
            <div className="grid grid-cols-2 gap-4">
                <div className='space-y-2'>
                    <p className="text-gray-400 text-sm">Name</p>
                    <input type='text' value={user.name} readOnly className='border border-card-border rounded-md px-3 py-1 bg-transparent w-full' />
                </div>
                <div className='space-y-2'>
                    <p className="text-gray-400 text-sm">Email</p>
                    <input type='text' value={user.email} readOnly className='border border-card-border rounded-md px-3 py-1 bg-transparent w-full' />

                </div>
                <div className='space-y-2'>
                    <p className="text-gray-400 text-sm">Title</p>
                    <input type='text' value={user.title} readOnly className='border border-card-border rounded-md px-3 py-1 bg-transparent w-full' />
                </div>
                <div className='space-y-2'>
                    <p className="text-gray-400 text-sm">Role</p>
                    <select className='border border-card-border rounded-md px-3 py-1 bg-transparent w-full '>
                        <option className='bg-app-bg'>{user.role}</option>
                        <option className='bg-app-bg'>User</option>
                    </select>
                </div>
            </div>
            <div className='space-y-2'>
                <p className="text-gray-400 text-sm">Position description</p>
                <textarea className='border border-card-border rounded-md px-3 py-1 bg-transparent w-full' value={user.positionDescription} readOnly rows={5} />
            </div>
        </div>
    );
}
