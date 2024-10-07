import React from 'react'
import contact from "../bakers-inn-resourses/Rectangle 32.png"
import arrow from '../bakers-inn-resourses/Group 300.png'
import imag1 from '../bakers-inn-resourses/Rectangle 347.png'
import people from '../bakers-inn-resourses/people.png'

const ContactPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <section className="contact">
          <div className="col-md-12">
            <div className="overlays">
              <div className="img">
                <img src={contact} alt="" />
              </div>
              <div className="overlay">
                <h1>CONTACT US</h1>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="cardss">
        <div className="row  oe">
          <div className="col-md-6 text1"><img src={imag1} alt="" /><h1>Harare Bread Factory</h1><p>
            1 Shepperton Road, Graniteside, Harare</p>

            <p>+263 242 710334, +263 242 751481, </p>
            <p>+263 242 751572, +263 242 758659</p>
            <h4>VOIP: <span>08677006178</span></h4>
            <h4>Econet Toll Free:<span> 08080151, 08080152</span></h4></div>
          <div className="col-md-6"><img src={imag1} alt="" /><h1>Harare Bread Factory</h1><p>
            1 Shepperton Road, Graniteside, Harare</p>

            <p>+263 242 710334, +263 242 751481, </p>
            <p>+263 242 751572, +263 242 758659</p>

            <h4>VOIP: <span>08677006178</span></h4>
            <h4>Econet Toll Free:<span> 08080151, 08080152</span></h4></div>
        </div>
      </section>

      <section className="emails">
        <div className="row">
          <div className="col-md-12"><img src={people} alt="" />
          </div>
          <div className="col-md-6"><div className="text1">
                <h3>For job enquiries,email your cv to</h3>
                <p>hr@bakersinnzim.com</p></div></div>
          <div className="col-md-6"><div className="text2"><h3>For general enquiries,email </h3>
                <p>marketing@bakersinnzim.com</p></div></div>
            <div className="textholder">
              
              
            </div>
        </div>
      </section>

      <section id="tables">

        <h1>Lists of Baker's Inn Depots</h1>
      <table>
        <thead>
          <tr>
            <th  className="text-[#261B6C] deposit">Depot</th>
            <th className="text-[#261B6C] " >Address</th>
            <th className="text-[#261B6C] ">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="deposit">Chinhoyi Depot</td>
            <td  className="text-[#261B6C]">94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
            <td  className="text-[#261B6C] font-bold one" >0772 318 309</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Bindura Depot</td>
            <td  className="text-[#261B6C]" >461 Luton Road, Industrial Site, Bindura</td>
            <td  className="text-[#261B6C] font-bold one " >066 2107317</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Murehwa Depot</td>
            <td  className="text-[#261B6C]" >Stand number 351 Murehwa Growth Point</td>
            <td  className="text-[#261B6C] font-bold one" >0652 122 514</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Mutare Depot</td>
            <td  className="text-[#261B6C]" >5-7 Glasgow Road, Industrial Site, Mutare</td>
            <td  className="text-[#261B6C] font-bold one " >020 60715</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Hwange Depot</td>
            <td   className="text-[#261B6C]" >29 Derby Drive, Hwange Industrial Site</td>
            <td  className="text-[#261B6C] font-bold one" >0281 2820105</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Chiredzi Depot</td>
            <td  className="text-[#261B6C]" >329 Lion Drive, Chiredzi</td>
            <td  className="text-[#261B6C] font-bold one" >0231 231 2709</td>
          </tr>
     
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Murehwa Depot</td>
            <td className="text-[#261B6C] " >1310 Mineral Road, Masvingo</td>
            <td className="text-[#261B6C] font-bold one" >0652 122 514</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Masvingo Depot</td>
            <td className="text-[#261B6C] " >Stand number 351 Murehwa Growth Point</td>
            <td className="text-[#261B6C] font-bold one" >039 266 333</td>
          </tr>
          <tr>
            <td className="text-[#261B6C] font-bold  deposit">Gweru Depot</td>
            <td className="text-[#261B6C] " >1843 Main Street, Gweru</td>
            <td className="text-[#261B6C] font-bold one" >054 2220 858</td>
          </tr>
          <tr>
            <td className=" deposit text-[#261B6C] font-bold  ">Zvishavane Depot</td>
            <td className="text-[#261B6C] " >Shabanie Mine Club, Noelville, Zvishavane</td>
            <td className="text-[#261B6C] font-bold one" >0772 395567</td>
          </tr>
        </tbody>
      </table>
      </section>

      <section className="form1">

        <div className="row">
          <h2>Request A Callback</h2>
          <p>Complete the form below and we will respond within 24 hours.</p>

          <div className="col-md-6"><select name="your title" id="your-title" ><option value="">your title</option><option value="">MR</option>
            <option value="">MISS</option>
            <option value="">MRS</option>
            <option value="">DR</option></select></div>
          <div className="col-md-6"><input type="text"  name="" placeholder="your name" /></div>
          <div className="col-md-6"><input type="text"  name="" placeholder="your phone number" /></div>
          <div className="col-md-6"><input type="text"  name="" placeholder="your email" /></div>
          <div className="col-md-12"><select name="" id=""><option value="">select area of interest</option>
            <option value=""></option>
            <option value=""></option></select></div>
          <div className="col-md-12"><select name="" id=""><option value="">nature of enquiry</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option></select></div>
          <div className="col-md-12"><select name="" id=""><option value="">Do you want to be contacted by phone</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option></select></div>
          <div className="col-md-12"><textarea name="" placeholder="your message" id=""></textarea></div>
        </div>

        <div className="col-md-12"><button class="btn button">SUBMIT</button></div>

      </section>

    </div >
  )
}

export default ContactPage
