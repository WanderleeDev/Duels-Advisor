import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import { ICustomClass } from "../interfaces/ICustomClass.interface";

function InputSearch({ customClass }: Partial<ICustomClass>) {
  const { Search } = Input;
  const [isSearching, setIsSearching] = useState(false);
  const onSearch: SearchProps["onSearch"] = (value, _e, _info) => {
    if (value.trim() === "") return;
    setIsSearching(true);
  };

  return (
    <Search
      className={`${customClass && customClass}`}
      type="secondary"
      disabled={isSearching}
      placeholder="input search text"
      loading={isSearching}
      onSearch={onSearch}
      enterButton={isSearching ? "Searching" : "Search"}
    />
  );
}

export default InputSearch;
