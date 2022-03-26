import React from 'react'

function Bonus() {
  return (
    <div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h5> <strong>How React Work?</strong></h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>It's a library, after all. To create user interfaces. This is ideal because, most of the time, this is all we desire. The most appealing aspect of this description is how it emphasizes React's simplicity. It isn't a massive framework. It isn't a full-stack solution capable of handling everything from the database to real-time changes via web socket connections. Most of these pre-packaged solutions aren't what we want because, in the end, they frequently create more problems than they solve. Facebook paid attention to what we wanted.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h5><strong> How useState() Works?</strong></h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The useState() is a built-in React Hook that allows you for having state variables in 
        functional components. It should be used when the DOM has something that is 
        dynamically manipulating/controlling. We initialize our state by calling useState in 
        our function component.
        useState accepts an initial state and returns two values:
        <li>The current state.</li>
        <li>A function that updates the state.</li></p>
         </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5> <strong>Props VS State?</strong></h5>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className=' fw-bold'>Props</p>
        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.
       <p className='mt-3 fw-bold'>State</p>
       The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Bonus