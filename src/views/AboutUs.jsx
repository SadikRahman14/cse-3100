import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-4">
      <h1>About Us</h1>
      <br />
      <section>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide innovative, high-quality products and services that help our clients succeed in their businesses. We strive to create a positive impact on the communities we serve.
        </p>
      </section>

      <section>
        <h3>Our Story</h3>
        <p>
          Founded in 2010, our company started as a small startup with a vision to revolutionize the industry with cutting-edge technology. Over the years, we have expanded our team and client base, always staying true to our mission of excellence and customer satisfaction.
        </p>
      </section>
        <br />
      <section>
        <h3>Meet the Team</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '330px', width:'300px'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/033/501/239/non_2x/ai-generative-cartoon-portrait-of-a-person-on-transparent-background-png.png" alt="Team Member" className="card-img-top"
              style={{ width: '250px', height: '250px', objectFit: 'cover',}} 
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">CEO & Founder</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '330px', width:'300px'}}>  
              <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/77106652-5e5b-4063-ab1c-312a04246222/3d601382-2f8d-4839-b4eb-e0ee9d72c304.png" alt="Team Member" className="card-img-top"
              style={{ width: '250px', height: '250px', objectFit: 'cover',}} 
               />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Chief Technology Officer</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '330px', width:'300px'}}>  
              <img src="https://img.freepik.com/premium-photo/illustration-single-man-american-cartoon-art-style-images-with-ai-generated_545052-3011.jpg" alt="Team Member" className="card-img-top"
                style={{ width: '250px', height: '250px', objectFit: 'cover',}} 
              />
              <div className="card-body">
                <h5 className="card-title">Sam Wilson</h5>
                <p className="card-text">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
