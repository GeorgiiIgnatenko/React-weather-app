import React, {ChangeEvent} from "react";
import { Input, Form } from "antd";
import "antd/es/input/style/index.css";
import "./SearchBar.scss";
const { Search } = Input;

export class SearchBar extends React.Component<any,any> {
    state = {
        value: ''
    };

    changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.target.value
        });
    };

    submitHandler = (e:React.FormEvent)=> {
        e.preventDefault();
        this.setState({value: ''})
    };


  render(){
    return (
      <div className="search_bar">
          <form onSubmit={this.submitHandler}>
                <Search
                    onChange={this.changeHandler}
                    value={this.state.value}
                    placeholder="Название города"
                    required
                />
          </form>
      </div>
    );
  }
}
