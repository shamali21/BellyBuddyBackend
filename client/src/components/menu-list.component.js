import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = props => (
    <tr>
      <td>{props.menu.username}</td>
      <td>{props.menu.description}</td>
      <td>{props.menu.duration}</td>
      <td>{props.menu.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.menu._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMenu(props.menu._id) }}>delete</a>
      </td>
    </tr>
  )
  

export default class MenuList extends Component {
    constructor(props) {
        super(props);

        this.deleteMenu = this.deleteMenu.bind(this);
        this.state = {menu: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/menu/')
        .then(response => {
            this.setState({menu: response.data})
        })
        .catch((error) => {
           console.log(error);
        })
    }

    deleteMenu(id){
        axios.delete('http://localhost:5000/menu/'+id)
        .then(res => console.log(res.data));
        
        this.setState({
            menu: this.state.menu.filter(el => el._id !== id)
        })
    }


    menuList() {
        return this.state.menu.map(currentmenu => {
          return <Menu menu={currentmenu} deleteMenu={this.deleteMenu} key={currentmenu._id}/>;
        })
      }

    render(){
         return(
            <div>
            <h3>Restaurant list</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Restaurant</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.menuList() }
              </tbody>
            </table>
          </div>
            
         )
     }
}