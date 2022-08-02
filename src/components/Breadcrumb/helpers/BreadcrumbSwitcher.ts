import { IEntryData } from "../../../interfaces/IEntryData";

export abstract class BreadcrumbSwitcher {
  protected abstract getReplacedValue(entryData: IEntryData): string;

  public getPathNamesWithReplacedId(
    pathnames: string[],
    entriesData: IEntryData[],
    targetId: string | undefined,
  ): string[] {
    const newPathNames = [...pathnames];

    entriesData.forEach((entryData: IEntryData) => {
      if (entryData.id === targetId) {
        const ID = pathnames.findIndex((path: string) => path === targetId);
        newPathNames[ID] = this.getReplacedValue(entryData);
      }
    });

    return newPathNames;
  }
}
