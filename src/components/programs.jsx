import SectionHead from "./sectionHead"
import {programs} from "../data"
import Card from "../UI/card"
import { Link } from "react-router-dom"


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead title= "Programs"/>
        </div>
        <div className="Program__wrapper">
          {
            programs.map(({id, title, image, path}) =>{
              return (
                <Card className= "programs__program" key={id}>
                  <span>{image}</span>
                   <h3>{title}</h3>
                   <Link to= {path} className="btn sm">Learn more</Link>
                </Card>
              )
            })
          }
        </div>
    </section>
  )
}

export default Programs