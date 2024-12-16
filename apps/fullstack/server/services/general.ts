import { Filter } from "mongodb";
import { getMongoClient } from "../connectors/mongodb";
import { DbCollections } from "../db-collections";

const getGeneralCollection = async () => {
  const client = await getMongoClient();
  const collection = client.collection<any>(DbCollections.general);
  return collection;
};

const list = async (query: Filter<any>) => {
    const collection = await getGeneralCollection();
    const data = await collection.find(query).toArray();
    return data;
  };

  export const getGeneralService = async () => {
    return {
      collection: await getGeneralCollection(),
      list,
    };
  };
  