import React from 'react';
import './index.css';
import homeLogo from './static/Home.png'
import List from './List';
import { Link } from 'react-router-dom';

const apiKey = "1fbec0cb91cd2469e96f871badde99f8";


class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {data : []}
    }

    componentDidMount()
    {
        this.fetchData();
    }



    fetchData()
    {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`).then(Response => Response.json()).then(data => {            
            this.setState({data : data.results});            
        });
    }

    handleChange(event)
    {
        const match = event.target.value;
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`).then(Response => Response.json()).then(data => {
            let values = [];
            for(const key of data.results)
            {
                if(String(key.title).toLowerCase().includes(String(match).toLowerCase()))
                {
                    values.push(key);
                }
            }
            this.setState({data : values});
        });
    }

  render() {
      return <div class="main">
          <div class="header">
      <input type="text" placeholder="Search" onInput={this.handleChange.bind(this)}></input>
      <Link to="/movies"><img src={homeLogo} alt="home logo" /></Link></div>
      <div class="list-body">
      <List obj={this.state.data} />
      </div>
    </div>
  }        
}
export default Header;