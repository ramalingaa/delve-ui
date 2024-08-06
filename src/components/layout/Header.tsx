import React from 'react';
import userAvatarImage from '../../assets/my-profile.png'
interface HeaderProps {
    activePage: 'Team' | 'Company' | 'Tech' | 'Audits';
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
    const menuItems = [
        { name: 'Team', number: 1 },
        { name: 'Company', number: 2 },
        { name: 'Tech', number: 3 },
        { name: 'Audits', number: 4 },
    ];

    return (
        <header className="bg-app-bg text-white p-4">
            <div className="container mx-auto flex justify-between items-center w-[90%] py-2">
                <div className="text-4xl font-bold flex items-center gap-2 cursor-pointer" >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9561 3.00488C24.9561 1.71521 24.0349 0.827513 22.7453 0.827513C19.5127 0.827513 16.2802 0.827513 13.0476 0.827513C9.81505 0.827513 6.74998 0.894509 3.60118 0.794015C1.6583 0.743768 0.871094 1.93295 0.871094 3.5576C0.904592 6.72315 0.871094 9.88871 0.871094 13.071C0.871094 16.2533 0.871094 19.1341 0.871094 22.1657C0.871094 23.6564 1.75879 24.6948 3.04846 24.6948C9.63081 24.6948 16.2132 24.6948 22.7788 24.6948C24.0182 24.6948 24.9394 23.7736 24.9394 22.5342C24.9394 16.0356 24.9394 9.52023 24.9394 3.02163L24.9561 3.00488ZM3.80217 9.90546C4.40513 8.78328 5.09184 7.71134 5.81204 6.65616C6.33126 5.8857 7.3362 5.71821 8.10665 6.18719C8.9106 6.65616 9.21208 7.6611 8.74311 8.49855C8.1234 9.58723 7.45344 10.6257 6.78348 11.6809C6.46525 12.1833 5.96278 12.4178 5.37657 12.4178C4.0534 12.4178 3.18245 11.0779 3.80217 9.90546ZM7.20221 21.3785C5.79529 21.3785 4.99134 19.9716 5.71155 18.7154C6.73324 16.9735 7.82192 15.2484 8.8771 13.5232C10.7027 10.5419 12.5284 7.5606 14.354 4.57928C14.7895 3.87583 15.3087 3.32311 16.1964 3.37336C17.5698 3.4571 18.2733 4.88077 17.5028 6.15369C15.8949 8.85027 14.2368 11.5134 12.5954 14.1764C11.356 16.2198 10.0998 18.2465 8.86036 20.2898C8.47513 20.9263 7.98941 21.3618 7.20221 21.3785ZM21.8743 11.6809C20.9699 13.2385 19.9984 14.7627 19.0605 16.3036C18.022 17.9785 17.0004 19.6701 15.9619 21.3283C15.2752 22.4337 14.3038 22.7352 13.3826 22.149C12.4949 21.5962 12.3274 20.5746 12.9639 19.5194C14.9067 16.3538 16.8496 13.1883 18.7925 10.006C19.1777 9.36949 19.6802 8.93402 20.4674 8.95077C21.8576 8.95077 22.628 10.3912 21.8911 11.6641L21.8743 11.6809Z" fill="white" />
                    </svg>
                    <span>Delve</span>
                </div>

                <nav className='hidden lg:block'>
                    <ul className="flex items-center space-x-2">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item.name}>
                                <li>
                                    <a
                                        href={`/${item.name.toLowerCase()}`}
                                        className={`flex items-center px-4 py-2 rounded-lg ${activePage === item.name
                                                ? 'bg-[#252527] text-white'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${activePage === item.name ? 'bg-[#DDDDDD]' : 'bg-[#848484] text-black'
                                            }`}>
                                            {activePage === item.name ? (
                                                <svg className="w-4 h-4" fill="#1C1C1E" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                item.number
                                            )}
                                        </span>
                                        {item.name}
                                    </a>
                                </li>
                                {index < menuItems.length - 1 && (
                                    <span className="text-gray-600">
                                        <svg className="w-4 h-4" fill="#848484" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>


                <div className="flex items-center">
                    <img
                        src={userAvatarImage}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;