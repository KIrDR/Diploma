
import { cn } from "@/lib/utils";

interface CurrencyBadgeProps {
  currency: "BYN" | "RUB" | "USD";
  className?: string;
}

const CurrencyBadge = ({ currency, className }: CurrencyBadgeProps) => {
  const badgeClasses = {
    "BYN": "currency-byn",
    "RUB": "currency-rub",
    "USD": "currency-usd",
  };

  return (
    <span className={cn("currency-badge", badgeClasses[currency], className)}>
      {currency}
    </span>
  );
};

export default CurrencyBadge;
