'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NotFoundPage() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        console.log(search);
    };

    const handleReturnHomePage = () => {
        router.push('/');
    };

    const handelKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="relative h-[60vh] flex items-center justify-center bg-[#fff]">
            <div className="absolute left-[32%] top-[8%] w-max text-center bg-[#fff] -[1.5] transform-[translate(-50%,-50%)] px-[110px] py-[40px]">
                <div className="relative h-[180px] flex items-center justify-center">
                    <h1 className="text-[165px] font-[700] uppercase">
                        4<span className="text-[#c32929]">0</span>4
                    </h1>
                </div>
                <h2 className="uppercase mb-[25px]">the page you requested could not found</h2>
                <div className="relative max-w-[320px] w-auto m-auto h-[50px]">
                    <input
                        className="w-[100%] h-[50px] py-[3px] pr-[6px] pl-[30px] font-[16px] border-solid border-2 border-[#c5c5c5] rounded-[40px] focus:border-[#c32929] focus:outline-none"
                        placeholder="Search..."
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handelKeyDown}
                    />
                    <button
                        className="absolute right-[15px] top-[5px] w-[40px] h-[40px] text-center text-[#c5c5c5] transition-all ease-in-out duration-500 hover:text-black focus:outline-none"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <button
                    className="uppercase transition-all duration-500 ease-in-out mt-[20px] border-2 bg-[#c32929] rounded-[40px] p-[20px] font-[600] hover:shadow-inner hover:bg-blue-200 hover: text-white"
                    onClick={handleReturnHomePage}
                >
                    Return to homepage
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
