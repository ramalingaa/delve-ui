import { Todo } from "../../types";

export const TodoSection: React.FC<{ key: number, todo: Todo }> = ({ key, todo }) => {

    return (
        <div key={key} className="bg-gray-800  rounded-lg flex flex-col gap-2  hover:bg-gray-900">
            <div className="px-4">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11.5" y="12.5" width="19" height="19" rx="4.5" stroke="url(#paint0_linear_6_2394)" />
                    <path d="M21.0001 22L24.3334 20.125M21.0001 22V25.75M21.0001 22L17.6667 20.125M21.0001 22L24.3334 23.875M21.0001 22V18.25M21.0001 22L17.6667 23.875" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <g filter="url(#filter0_f_6_2394)">
                        <circle cx="21" cy="21.6523" r="6" fill="url(#paint1_linear_6_2394)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_6_2394" x="0.2" y="0.852344" width="41.6" height="41.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="7.4" result="effect1_foregroundBlur_6_2394" />
                        </filter>
                        <linearGradient id="paint0_linear_6_2394" x1="4.25879" y1="10.0873" x2="13.7096" y2="35.2306" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F7D14E" />
                            <stop offset="0.195" stop-color="#FFF5D1" />
                            <stop offset="0.37" stop-color="#F7D14E" />
                            <stop offset="0.51" stop-color="#F7D14E" />
                            <stop offset="0.75" stop-color="#FFF5D1" />
                            <stop offset="1" stop-color="#F7D14E" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_6_2394" x1="10.9553" y1="14.5047" x2="16.6258" y2="29.5907" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F7D14E" />
                            <stop offset="0.195" stop-color="#FFF5D1" />
                            <stop offset="0.37" stop-color="#F7D14E" />
                            <stop offset="0.51" stop-color="#F7D14E" />
                            <stop offset="0.75" stop-color="#FFF5D1" />
                            <stop offset="1" stop-color="#F7D14E" />
                        </linearGradient>
                    </defs>
                </svg>

                <h4 className="font-medium text-sm">{todo.title}</h4>
            </div>
            <p className="text-gray-400 text-xs mb-2 px-4">
                {todo.status === 'complete'
                    ? `Last completed ${todo.lastCompleted}`
                    : 'Not yet completed'}
            </p>
            <div className="h-[1px] bg-[#3B455C]"></div>

            <div className="flex items-center justify-between px-4 py-2">
                <span className={`text-xs px-2 py-1 rounded ${todo.status === 'complete' ? 'bg-green-500' : 'bg-yellow-500 text-gray-900'
                    }`}>
                    {todo.status === 'complete' ? 'Complete' : todo.dueDate ? `Due ${todo.dueDate}` : 'Due ASAP'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path className="fill-current text-gray-400 cursor-pointer hover:text-white" strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>


            </div>
        </div>
    );
}