import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimony'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Ritik"} feedback={"Very good Developer & completed project before time."} />
            <TestimonialCard name={"Rajmani"} feedback={"Amazing react developer."} />
            <TestimonialCard name={"Ritik"} feedback={"Deliver faster than expected."} />

        </section>
    </div>
  )
};

const TestimonialCard =({ name, feedback })=>{
    return (
    <article>
        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='Best Web Developer' />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
    )
}

export default Testimonials