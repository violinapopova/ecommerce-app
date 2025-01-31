import { cn } from "@/lib/utils";
import React from "react";

interface PriceFormatterProps {
  amount: number | undefined;
  className?: string;
}
const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;