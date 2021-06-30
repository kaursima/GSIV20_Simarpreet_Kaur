import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Show(props)
{
    return props.obj.map(item => {
    return <div key={item.id} class="items"><Link to = {`/movies/details/${item.id}`} obj={item}>
      <div class="heading">
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="posterImage" class="posterImg"></img>
        <div class="heading-container">
        <span class="name">{item.title}</span>
      <span class="rating">{item.vote_average}</span></div></div>
      <div class="description">{item.overview.slice(0,75)+"...." }</div></Link>
    </div>
    })
}

class List extends React.Component
{
  sortObj(values)
  {
    const arr = values;
    const sorted = arr.slice().sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();
      return dateA > dateB ? -1 : 1; 
  })
  return sorted;
  }

    render()
    {
      return <Show obj = {this.sortObj(this.props.obj)}/>
    }
}
  export default List;