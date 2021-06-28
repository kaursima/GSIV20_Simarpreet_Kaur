import React from 'react';
import './index.css';
import homeLogo from './static/Home.png'
import List from './List';

const apiKey = "1fbec0cb91cd2469e96f871badde99f8";


class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {data : []}
    }

    componentDidMount()
    {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`).then(Response => Response.json()).then(data => {
            let values = [];
            for(const key of data.results)
            {
                values.push(key);
            }
            this.setState({data : values})
        });
    }
  render() {
      return <div class="Header">
      <input type="text" placeholder="Search"></input>
      <img src={homeLogo} alt="home logo" />
      <div class="list-body">
      <List obj = {this.state.data} />
      </div>
    </div>
  }        
}

export default Header;