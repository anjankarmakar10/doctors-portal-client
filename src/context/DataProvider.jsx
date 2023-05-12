import { createContext, useContext, useState } from "react";
import dayjs from "dayjs";
const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [date, setDate] = useState(dayjs());
  const [selectedCard, setSelectedCard] = useState({});

  const value = { date, setDate, selectedCard, setSelectedCard };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
