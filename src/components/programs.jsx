import SectionHead from "./sectionHead"
import {programs} from "../data"
import Card from "../UI/card"
import Image from './Images/ArryTRpresentation_page-0013 1.png'

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
                  <span>{Image}</span>
                   <h3>{title}</h3>
                </Card>
              )
            })
          }
        </div>
    </section>
  )
}

export default Programs