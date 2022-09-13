export interface Position {
  id: string;
  name: string;
  created_at: string;
}

export interface PositionsNamesIdsData {
  positions: PositionNamesIds[];
}

export interface PositionNamesIds {
  id: string;
  name: string;
}
