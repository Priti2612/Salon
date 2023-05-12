import React from 'react'

const Welcome = () => {
  return (
    <div>
        <section
      class="banner container-fluid d-flex justify-content-center align-items-center"
    >
      <p id="banner-text" class="">Laser Skin Resurfacing</p>
    </section>
    {/* <!-- Banner section ends here -->
    <!-- Welcome section starts here --> */}

    <div class="welcome container text-center">
      <div class="row">
        <div class="col-lg-6 col-sm-12 col-md-12 left-wel">
          <div class="rectangle"></div>
          <div class="img-wel"></div>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-12 right-wel ">
          <p class="label-wel">We Provide</p>
          <p class="title-wel">Welcome to Spa Center</p>
          <p class="para-wel">
            Spread over two floors, our beautiful spa offer a soothing
            environment in which you can rest, relax and feel competely
            rejuvenated.<br /><br /><br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
            remaining essentially unchanged. It was popularised in the with
            theLorem Ipsum is simply dummy text of the printing and eentially
            unchanged.
          </p>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome