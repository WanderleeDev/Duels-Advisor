import placeholder from "/public/images/others/placeholder-card.webp";

export const iconExists = (icon = "", icons: Record<string, string>): boolean =>
  icon in icons;

export const getIcon = (
  attribute: string,
  icons: Record<string, string>
): string => {
  if (iconExists(attribute.toLowerCase(), icons))
    return icons[attribute.toLowerCase()];
  return placeholder;
};
