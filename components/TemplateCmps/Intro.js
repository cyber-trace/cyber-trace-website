import React from "react";

import { Button } from "@/atoms";

import data from "constants/sections_data/Intro.json";

const Intro = () => {
  const { title, text, label } = data;
  return (
    <section
      style={{ backgroundImage: "url('/bg-image.png')" }}
      className="text-white h-screen relative px-6 sm:px-20 
      bg-no-repeat bg-cover bg-center flex items-center font-nunito"
    >
      <div className="grid gap-6  justify-items-start">
        <h1 className="text-5xl md:text-7xl font-bold font-nunito">{title}</h1>
        <p className="text-sm md:text-base md:w-1/2">{text}</p>
        <Button label={label} />
      </div>

      <div className="grid gap-4 absolute right-16 bottom-16">
        <svg
          className="w-6 h-6 cursor-pointer hover:text-accentColor"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.0212 11.264C36.0015 9.78075 35.7238 8.3123 35.2007 6.92428C34.747 5.7535 34.0542 4.69021 33.1663 3.80237C32.2785 2.91452 31.2152 2.22164 30.0444 1.76799C28.6742 1.25365 27.2267 0.975535 25.7635 0.945492C23.8796 0.861284 23.2823 0.837784 18.5 0.837784C13.7178 0.837784 13.1048 0.837784 11.2346 0.945492C9.77204 0.975756 8.3252 1.25387 6.95564 1.76799C5.78467 2.22133 4.72122 2.9141 3.83334 3.80198C2.94545 4.68987 2.25268 5.75331 1.79935 6.92428C1.28398 8.29342 1.00647 9.74058 0.978807 11.2032C0.894599 13.0891 0.869141 13.6864 0.869141 18.4687C0.869141 23.2509 0.869141 23.8619 0.978807 25.7341C1.00818 27.1989 1.28431 28.6442 1.79935 30.0169C2.25344 31.1876 2.94673 32.2506 3.83491 33.1381C4.72309 34.0256 5.78664 34.7181 6.9576 35.1713C8.32341 35.7063 9.7705 36.0043 11.2366 36.0525C13.1224 36.1367 13.7197 36.1622 18.502 36.1622C23.2842 36.1622 23.8972 36.1622 25.7674 36.0525C27.2306 36.0237 28.6782 35.7463 30.0483 35.232C31.2188 34.7778 32.2818 34.0847 33.1696 33.197C34.0574 32.3092 34.7504 31.2462 35.2046 30.0757C35.7196 28.7049 35.9958 27.2596 36.0251 25.7928C36.1093 23.9089 36.1348 23.3116 36.1348 18.5274C36.1309 13.7452 36.1309 13.1381 36.0212 11.264ZM18.4883 27.5122C13.4867 27.5122 9.43489 23.4604 9.43489 18.4589C9.43489 13.4573 13.4867 9.40549 18.4883 9.40549C20.8894 9.40549 23.1921 10.3593 24.89 12.0572C26.5878 13.755 27.5416 16.0578 27.5416 18.4589C27.5416 20.86 26.5878 23.1627 24.89 24.8606C23.1921 26.5584 20.8894 27.5122 18.4883 27.5122ZM27.902 11.1817C27.6247 11.182 27.35 11.1275 27.0938 11.0215C26.8375 10.9155 26.6047 10.76 26.4086 10.564C26.2126 10.3679 26.0571 10.135 25.9511 9.8788C25.8451 9.62255 25.7906 9.34792 25.7909 9.07062C25.7909 8.79351 25.8455 8.51912 25.9515 8.26311C26.0576 8.00711 26.213 7.77449 26.4089 7.57855C26.6049 7.38261 26.8375 7.22718 27.0935 7.12113C27.3495 7.01509 27.6239 6.96051 27.901 6.96051C28.1781 6.96051 28.4525 7.01509 28.7085 7.12113C28.9645 7.22718 29.1971 7.38261 29.3931 7.57855C29.589 7.77449 29.7444 8.00711 29.8505 8.26311C29.9565 8.51912 30.0111 8.79351 30.0111 9.07062C30.0111 10.2378 29.0672 11.1817 27.902 11.1817Z"
            fill="white"
          />
        </svg>

        <svg
          className="w-6 h-6 cursor-pointer hover:text-accentColor"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.1667 0.875H2.83333C2.31395 0.875 1.81584 1.08132 1.44858 1.44858C1.08132 1.81584 0.875 2.31395 0.875 2.83333V34.1667C0.875 34.6861 1.08132 35.1842 1.44858 35.5514C1.81584 35.9187 2.31395 36.125 2.83333 36.125H19.7044V22.495H15.1258V17.1585H19.7044V13.2419C19.7044 8.68875 22.4852 6.20754 26.5585 6.20754C27.9274 6.20363 29.2982 6.27413 30.6612 6.41708V11.1562H27.851C25.642 11.1562 25.2112 12.2098 25.2112 13.751V17.1488H30.4928L29.8074 22.4852H25.2092V36.125H34.1667C34.6861 36.125 35.1842 35.9187 35.5514 35.5514C35.9187 35.1842 36.125 34.6861 36.125 34.1667V2.83333C36.125 2.31395 35.9187 1.81584 35.5514 1.44858C35.1842 1.08132 34.6861 0.875 34.1667 0.875Z"
            fill="white"
          />
        </svg>
        <svg
          className="w-6 h-6 cursor-pointer hover:text-accentColor"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.958497 4.55776C0.958497 3.60314 1.33772 2.68761 2.01274 2.01259C2.68776 1.33757 3.60329 0.958348 4.55791 0.958348H40.4385C40.9116 0.957576 41.3802 1.05012 41.8174 1.23069C42.2547 1.41125 42.6521 1.67629 42.9868 2.01063C43.3215 2.34497 43.587 2.74204 43.768 3.17912C43.949 3.61619 44.0421 4.08468 44.0418 4.55776V40.4383C44.0423 40.9115 43.9496 41.3801 43.7688 41.8174C43.588 42.2547 43.3228 42.6521 42.9883 42.9867C42.6538 43.3214 42.2566 43.5869 41.8194 43.7679C41.3822 43.9489 40.9136 44.0419 40.4405 44.0417H4.55791C4.08507 44.0417 3.61685 43.9485 3.18002 43.7675C2.74319 43.5865 2.34631 43.3212 2.01205 42.9867C1.67779 42.6523 1.4127 42.2553 1.23192 41.8183C1.05115 41.3814 0.958239 40.9131 0.958497 40.4403V4.55776ZM18.0117 17.3848H23.8455V20.3145C24.6876 18.6303 26.8418 17.1146 30.0789 17.1146C36.2849 17.1146 37.7556 20.4692 37.7556 26.6243V38.0257H31.4752V28.0264C31.4752 24.521 30.6331 22.5431 28.4946 22.5431C25.5277 22.5431 24.294 24.6757 24.294 28.0264V38.0257H18.0117V17.3848ZM7.24083 37.7574H13.5232V17.1146H7.24083V37.7554V37.7574ZM14.422 10.3818C14.4339 10.9197 14.3382 11.4546 14.1405 11.955C13.9428 12.4554 13.6472 12.9113 13.271 13.2959C12.8948 13.6805 12.4455 13.9861 11.9496 14.1947C11.4536 14.4034 10.921 14.5108 10.383 14.5108C9.84495 14.5108 9.31233 14.4034 8.8164 14.1947C8.32046 13.9861 7.87119 13.6805 7.49496 13.2959C7.11873 12.9113 6.8231 12.4554 6.62544 11.955C6.42778 11.4546 6.33207 10.9197 6.34391 10.3818C6.36716 9.32602 6.80292 8.32127 7.55786 7.58277C8.31279 6.84428 9.32689 6.43075 10.383 6.43075C11.4391 6.43075 12.4532 6.84428 13.2081 7.58277C13.963 8.32127 14.3988 9.32602 14.422 10.3818Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Intro;
