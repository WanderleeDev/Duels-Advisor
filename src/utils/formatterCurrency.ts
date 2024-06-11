export default function formatterCurrency(
  quantity: number,
  format = "en-Us",
  currency = "USD"
): string {
  if (quantity === undefined || typeof quantity !== "number")
    throw new Error("quantity is required and in numerical format");

  const formatter = new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(quantity);
}
