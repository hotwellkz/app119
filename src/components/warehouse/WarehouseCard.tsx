import React from 'react';

interface WarehouseCardProps {
  icon: React.ReactNode;
  title: string;
  count?: number;
  onClick: () => void;
  color: string;
}

export const WarehouseCard: React.FC<WarehouseCardProps> = ({
  icon,
  title,
  count,
  onClick,
  color
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-3 sm:p-6 flex flex-col items-center justify-center text-center aspect-square transform hover:-translate-y-1"
    >
      <div className={`${color} p-2 sm:p-4 rounded-xl mb-2 sm:mb-3 shadow-lg`}>
        {icon}
      </div>
      <span className="text-gray-800 font-medium tracking-wide text-xs sm:text-sm">{title}</span>
      {count !== undefined && (
        <span className="text-gray-500 text-xs sm:text-sm mt-1 font-medium">{count}</span>
      )}
    </button>
  );
};