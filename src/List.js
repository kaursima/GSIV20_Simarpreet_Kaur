import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Show(props)
{
    return props.obj.map(item => {
    return <div class="items"><Link to ="">
      <div class="heading">
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="posterImage" class="posterImg"></img>
        <div class="heading-container">
        <span class="name">{item.title}</span>
      <span class="rating">{item.vote_average}</span></div></div>
      <div class="description">{item.overview.slice(0,75)+"..." }</div></Link>
    </div>
    })
}

class List extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state= {values : this.props.obj};
  }

  componentDidMount()
  {
    const arr = this.state.values;
    const sorted = arr.slice().sort((a, b) => {
      var dateA = new Date(a.release_date).getTime();
      var dateB = new Date(b.release_date).getTime();
      return dateA > dateB ? -1 : 1; 
  })
    this.setState({values : sorted});
  }

    render()
    {
      return <Show obj = {this.state.values}/>
    }
}
  export default List;