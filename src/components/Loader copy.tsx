import React from "react";

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center ">
      <div className="w-28 h-28 border-8 text-orange-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-orange-400 rounded-full">
        <svg
          width="60"
          height="41"
          viewBox="0 0 137 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.4024 0.418945H0V60.1987H68.4024V0.418945Z"
            fill="#EF7D00"
          />
          <path
            d="M136.942 0.418945H68.4025V60.1987H136.942V0.418945Z"
            fill="#009640"
          />
          <path
            d="M80.1576 6.81958H129.451L120.834 17.8668H92.9859V24.8523H129.282L121.004 35.9076H92.9859V42.7335H129.451L121.172 53.9387H80.1576V6.81958Z"
            fill="white"
          />
          <path
            d="M76.0135 8.28467L60.738 16.7079V53.9048H76.0135V8.28467Z"
            fill="white"
          />
          <path
            d="M60.738 6.79199V14.8558L75.8531 6.79199H60.738Z"
            fill="white"
          />
          <path
            d="M43.5834 26.4123V20.7517C43.5834 19.8362 42.8145 19.0948 41.865 19.0948H22.0291C21.0796 19.0948 20.3107 19.8362 20.3107 20.7517V39.8401C20.3107 40.754 21.0796 41.4938 22.0258 41.4938H40.3973C42.5019 41.4938 43.55 40.6799 43.55 38.4024L43.5383 37.5675H43.5417L56.4034 30.9995V50.6794C56.4034 52.4234 54.9373 53.8386 53.1269 53.8386H10.7806C8.96348 53.8386 7.49075 52.4186 7.49075 50.6665V9.91722C7.49075 8.17165 8.95847 6.75488 10.7705 6.75488H53.1219C54.9356 6.75488 56.405 8.17165 56.405 9.92044V19.7427L43.5734 26.4107H43.5834V26.4123Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
