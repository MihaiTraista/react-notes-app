import { MdSearch } from 'react-icons/md';

export default function Search({ handleSearch }){
  return(
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input type="text" placeholder="type to search..." onChange={event=>handleSearch(event.target.value)}/>
    </div>
  );
}