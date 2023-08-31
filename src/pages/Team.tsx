import {Component} from "react"
import "../styles/team_and_employee.css"
import { Ciara, Gabriel, Alwin, Thomas } from "../components/Employee"

class Team extends Component {
    render(){

        return(
            <div className="responsive-container-block container">
                <p className="text-blk team-head-text">
                    Our Team
                </p>
                <div className="responsive-container-block">
                    <Ciara 
                        image="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                        name="Ciara Parce"
                        position="Front-end Developer"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu."
                        link1="https://www.facebook.com/login/"
                        link2="https://www.linkedin.com/login"
                        link3="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                        link4="https://drive.google.com/file/d/1NPFVvSLrl2wMWTf6o5BO-w_0zK9ZuA-Q/view?usp=drive_link"
                    />
                    <Alwin 
                        image="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                        name="James Alwin Aljecera"
                        position="Senior Data Analyst"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu."
                        link1="https://www.facebook.com/login/"
                        link2="https://www.linkedin.com/login"
                        link3="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                        link4="https://drive.google.com/file/d/1POZEPy0cB2WUp8n7Z_C7HfREyE3xb1AD/view?usp=drive_link"
                    />
                    <Gabriel 
                        image="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                        name="Gabriel Paderna"
                        position="ETL Developer"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu."
                        link1="https://www.facebook.com/login/"
                        link2="https://www.linkedin.com/login"
                        link3="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                        link4="https://drive.google.com/file/d/11U7BOZ1MeqkYIODs2XskmhWeNJdPGUru/view?usp=drive_link"
                    />
                    <Thomas 
                        image="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                        name="Thomas Cyril Cauyan"
                        position="Research and Development Engineer"
                        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu."
                        link1="https://www.facebook.com/login/"
                        link2="https://www.linkedin.com/login"
                        link3="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                        link4="https://docs.google.com/document/d/1NQX662L1ifFHbIiV8jFCWpZ2bMn4unJ31Vs6RNtr7WM/edit?usp=drive_link"
                    />
                </div>
            </div>
        )
        
    }
}

export default Team;