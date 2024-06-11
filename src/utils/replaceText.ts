interface IFormatConfig {
  searchValue: string;
  newValue?: string;
}

export default function replaceText(
  text: string,
  config: IFormatConfig
): string {
  if (!config.searchValue || typeof text !== "string") return text;
  if (config.searchValue === config.newValue) return text;

  const regex = new RegExp(config.searchValue, "g");

  if (!config.newValue) return text.replace(regex, "");

  return text.replace(regex, config.newValue);
}
