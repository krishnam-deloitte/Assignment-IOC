import { Bracket } from "react-brackets";
import rawData from "../api/mockData.json";
import { transformedSeedData } from "../utils/helper";

export const FlowChart = () => {
  const rounds = transformedSeedData(rawData);
  return <Bracket rounds={rounds}  />;
};
