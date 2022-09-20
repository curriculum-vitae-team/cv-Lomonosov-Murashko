import { CacheUpdaterFunction } from "src/types";
import { DeleteEntityEntryInput } from "../Entity.interface";
import { DeletePositionOutput, GetPositionsData } from "./Position.interface";
import { GET_POSITIONS } from "./Position.queries";

export const deletePositionCacheUpdate =
  (
    id: string,
  ): CacheUpdaterFunction<DeletePositionOutput, DeleteEntityEntryInput> =>
  (cache, { data }) => {
    const existingPositions = cache.readQuery<GetPositionsData>({
      query: GET_POSITIONS,
    });

    if (existingPositions && data?.deletePosition.affected) {
      cache.writeQuery({
        query: GET_POSITIONS,
        data: {
          positions: existingPositions.positions.filter(
            (entry) => entry.id !== id,
          ),
        },
      });
    }
  };
