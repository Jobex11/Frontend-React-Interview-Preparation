import MenuList from "./menu-list";
// TreeView is also called  RECURSIVE NAVIGATION MENU
export default function Treeview({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
