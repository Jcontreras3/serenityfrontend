import { createContext } from "react";

interface IDataContext {
  updatedPublisherName: string;
  setUpdatedPublisherName: React.Dispatch<React.SetStateAction<string>>;
  updatedUserId: number;
  setUpdatedUserId: React.Dispatch<React.SetStateAction<number>>;
}

const DataContext = createContext<IDataContext>({
  updatedPublisherName: "",
  setUpdatedPublisherName: () => {},
  updatedUserId: 0,
  setUpdatedUserId: () => {},
});

export default DataContext;