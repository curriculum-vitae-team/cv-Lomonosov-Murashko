import { withSidebarIconStyles } from "../HOCs/withSidebarIconStyles";
import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export const SideBarIcons = {
  Dns: withSidebarIconStyles(DnsIcon),
  AutoStories: withSidebarIconStyles(AutoStoriesIcon),
  FolderIcon: withSidebarIconStyles(FolderIcon),
  EmojiPeople: withSidebarIconStyles(EmojiPeopleIcon),
};
