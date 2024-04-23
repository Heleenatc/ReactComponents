import MenuItem from "./menu-item";

//First level menus

export default function MenuList({list=[]}){
  return (<ul className="menu-list-container">
    {list && list.length 
    ? list.map((listIem)=><MenuItem item={listIem}/>)
    :null}
  </ul>);

}