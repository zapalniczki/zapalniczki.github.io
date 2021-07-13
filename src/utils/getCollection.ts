import { DocumentData, QuerySnapshot } from "@firebase/firestore";
import { Schema } from "zod";
import parseApiResponse from "./parseApiResponse";

function getCollection<T>(
  snapshot: QuerySnapshot<DocumentData>,
  schema: Schema<T>
): T[] {
  let records: T[] = [];

  snapshot.forEach((elem) => {
    const parsedElem = parseApiResponse(schema, elem);
    records.push(parsedElem);
  });

  return records;
}

export default getCollection;
