import { CacheUpdaterFunction } from "src/types";
import {
  DeleteCvInput,
  DeleteCvOutput,
  CvsData,
  CreateCvOutput,
  CreateCvInput,
} from "./Cv.interface";
import { GET_ALL_CVS } from "./Cv.queries";

export const deleteCvCacheUpdate =
  (id: string): CacheUpdaterFunction<DeleteCvOutput, DeleteCvInput> =>
  (cache, { data }) => {
    const existingCvs = cache.readQuery<CvsData>({ query: GET_ALL_CVS });

    if (existingCvs && data?.deleteCv.affected) {
      cache.writeQuery({
        query: GET_ALL_CVS,
        data: {
          cvs: existingCvs.cvs.filter((cv) => cv.id !== id),
        },
      });
    }
  };

export const createCvCacheUpdate =
  (): CacheUpdaterFunction<CreateCvOutput, CreateCvInput> =>
  (cache, { data }) => {
    const existingCvs = cache.readQuery<CvsData>({
      query: GET_ALL_CVS,
    });

    if (existingCvs) {
      cache.writeQuery({
        query: GET_ALL_CVS,
        data: {
          users: [data?.createCv, ...existingCvs.cvs],
        },
      });
    }
  };
