import React, { Fragment } from 'react'
import Header from './Header'
import './home.css'
import ingerdiant from './../../data/ingredients.png'
import ingerdiant2 from './../../data/ingredients2.png'
import data from './../../data'
import Carousel from 'react-bootstrap/Carousel';
import cook1 from './../../data/cooker1.jpg'
import cook2 from './../../data/cooker2.jpg'
import cook3 from './../../data/cooker3.jpg'
 function Home() {
  return (
    <Fragment>
      <Header/>
      <div className='numbers'>
        <div className='row'>
          <div className='col-3'>
            <h1>1287+</h1>
            <h5>SAVINGS</h5>
          </div>
          <div className='col-3'>
            <h1>3587+</h1>
            <h5>PHOTOS</h5>
          </div>
          <div className='col-3'>
            <h1>1567+</h1>
            <h5>ROCKETS</h5>
          </div>
          <div className='col-3'>
            <h1>3876+</h1>
            <h5>GLOBES</h5>
          </div>
        </div>
      </div>
      <section className='ingredients container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={ingerdiant} alt='inger'></img>
          </div>
          <div className='col-md-6 content'>
            <h1>We pride ourselves on making real food from the best ingredients.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
               Mauris feugiat erat tellus.</p>
            <button><a href='/'></a>learn more</button>
            
          </div>
        </div>
      </section>
      <section className='container ingredients'id='About us'>
        <div className='row'>
        <div className='col-md-6 content'>
          <h1>We make everything by hand with the best possible ingredients.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
             Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts.</p>
          <ul>
            <li><i className="fa-solid fa-check"></i>Etiam sed dolor ac diam volutpat.</li>
            <li><i className="fa-solid fa-check"></i>Erat volutpat aliquet imperdiet.</li>
            <li><i className="fa-solid fa-check"></i>purus a odio finibus bibendum.</li>
          </ul>
          <button><a href='/' ></a>learn more</button>
        </div>
        <div className='col-md-6'>
          <img src={ingerdiant2} alt='inger'></img>
        </div>
        </div>
      </section>
      <section>
        <div className='row stomach '>
          <div className='col-12'>
            <h1>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Etiam et purus a odio<br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
               <div className='vedio'> <a href='https://www.youtube.com/watch?v=bZx8rPd-PKQ&list=WL&index=1'><i className="fa-brands fa-youtube"></i> Watch Our Story</a></div>
          </div>
        </div>
      </section>
      <section className='container foods' id='Explore'>
        <div className='row '>
          <div className='col-12'>
            <h1>Explore Our Foods</h1>
            <p className='frist'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Etiam et purus a odio finibus bibendum in sit amet<br/> leo.
                Mauris feugiat erat tellus. Far far away, behind the word mountains,
                 far from the countries Vokalia and<br/> Consonantia,
               there live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
        </div>
        <div className='row meals'>
          {data.map((item)=>{
            return(
              
            <div className='col-md-6 col-lg-4' key={Math.random()}>
            <img src={item.img} alt=''></img>
            <h5>{item.title}</h5>
            <p>{item.time}</p>
            <p>{item.price}</p>
            <button>order now</button>
          </div>
          
            )
           
          })}

        </div>
      </section>  
        <section className='slide ' id='Reviews'>
          <h2>Testimonials</h2>
          <div className='row container'>
            <div className='col-md-12  '>
            <Carousel className=''>
                <Carousel.Item>
                  <img
                   
                    src={cook1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>"Nulla vitae elit libero, a pharetra augue mollis interdum
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
                    <h3>TOM</h3>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    
                    src={cook2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
                    <h3>JON</h3>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    
                    src={cook3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    
                    <p>
                      "
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur
                      Praesent commodo cursus magna."
                    </p>
                    <h3>SAPT</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <section className='container' id='FAQ'>
          <div className='row  Questions'>
            <h1>Frequently Asked Questions</h1>
            <div className='col-md-6'>
              <div>
                <h5><span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
              <div>
                <h5><span>~</span> Can I order your products online?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
              <div>
                <h5><span>~</span> When are you opening a shop near me?</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='row  Baked'>
            <div className='col-md-6'>
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div  className='col-md-6'>
              <button>Learn more</button>
            </div>
          </div>
        </section>
        <section className='Subscribe '>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Hurry up! Subscribe our news<br/>letter and get 25% Off</h1>
              <p>Limited time offer for this month. No credit card required.</p>
              <div>
                <input type={'email'} placeholder='Email Address here' ></input>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  )
}
export default Home