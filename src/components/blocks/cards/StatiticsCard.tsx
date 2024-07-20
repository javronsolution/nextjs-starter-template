import React from "react";

type StatiticsCardProps = {
  count: string;
  description: string;
};

const StatiticsCard: React.FC<StatiticsCardProps> = ({
  count,
  description,
}) => {
  return (
    <div className="flex flex-col  text-center gap-1 items-center">
      <h2 className="text-3xl font-bold text-primary-800">{count}</h2>
      <p className="text-text-600 text-sm">{description}</p>
    </div>
  );
};

export default StatiticsCard;
