import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import List from "../List/List";

import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ["home", "blog", "about me", "pics", "contact"],
      info: {
        name: "Juan",
        age: "23",
        job: "Developer",
      },
      pageTitle: "Welcome to my Personal Blog",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeJobTitle = this.changeJobTitle.bind(this);
    this.addNewPage = this.addNewPage.bind(this);
  
  }

  changeTitle(newPageTitle) {
    this.setState({
        pageTitle: newPageTitle
    })
}

changeTitle(newPageTitle) {
  this.setState({
      pageTitle: newPageTitle
  })
}

changeJobTitle() {
  this.setState( prevState => ({
      info: {...prevState.info, jobTitle: 'Academik Instructor for React and Node Bootcamp'}
  }))
}

addNewPage() {
  this.setState( prevState => ({
      pages: [...prevState.pages, 'new Page']
  }))
}

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar pages={this.state.pages} title="Hola Mundo" />
        <h1>{this.state.pageTitle}</h1>
        <p>I am developer since 12 year</p>
        <List title="Personal info">
          <li>Name: {this.state.info.name}</li>
          <li>Age: {this.state.info.age}</li>
          <li>Job Title: {this.state.info.job}</li>
        </List>
        <List title="Backend Language">
          <li>Java</li>
          <li>C#</li>
          <li>C++</li>
        </List>
        <List title="Frontend Language">
          <li>React</li>
          <li>Vue.js</li>
          <li>Angular.js</li>
        </List>
        <img width="640" src="https://picsum.photos/640" />

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        

          <div>
              <Button textButton="Change Title" onClick={this.changeTitle}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
