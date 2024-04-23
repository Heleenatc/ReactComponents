import MenuList from "./menu-list";

//Main component
export default function TreeView({menus=[]}){
  return <div className="tree-view-container">
    <MenuList list={menus} />
  </div>
}