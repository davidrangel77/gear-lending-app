import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section>
        <h1 className="pageHeadingTitle">Resume</h1>
        <div className="resumeWhole">
          <div className="resumeContentRight">
            <h1>Technical Skills</h1>
            <ul className="techSkillsList">
              <li>html</li>
              <li>CSS</li>
              <li>javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Git/Github</li>
              <li>Travis CI</li>
              <li>Adobe Photoshop</li>
            </ul>
            <div className="resumeContentEducation">
              <h1>Education</h1>
              <ul className="techSkillsList">
                <li>The Ironyard, San Antonio, 2017</li>
                <li>O.W. Holmes High School, 1995</li>
              </ul>
              <div>
                <h3 className="resumeHeaderTextName">Contact</h3>
                <p className="resumeHeaderText">David Rangel</p>
                <p className="resumeHeaderText">6719 Blue Oak Ln</p>
                <p className="resumeHeaderText">San Antonio, TX 78227</p>
                <p className="resumeHeaderText">(210) 836-4821</p>
                <p className="resumeHeaderText"><a href= "mailto:mr.davidrangel@gmail.com">mr.davidrangel@gmail.com</a></p>
              </div>
            </div>
          </div>
          <div className="resumeContent">
          <div>
            <h3>Self- employed freelance photographer and food & beverage industry consultant.<br/><br/><span className="resumeDates">06/2013- 09/2016</span>
            </h3>
            <p className="resumeText">
              With my background in the food and beverage industry and proficiency in photography it was a natural progression to marry the two and to markedly propel the quality of photographic content in the local advertising and web-based markets for area restaurants and bars.<br/><br/>
              I also held intermediary positions with various local companies on a temporary basis to help assist at inception, staffing and opening. <br/><br/>
              Clients include: <span className="italic">The San Antonio Current; The San Antonio Express News; Lou Hammond Group; The Boulevardier Group; Rosella Coffee Co.; The City of San Antonio/Centro; The Empty Stomach Group; Emily Reynolds PR. My photography had been featured in several successful art exhibits as well as being featured nationally in such publications as: Imbibe; Good Morning America; Eater; Food & Wine; Garden & Gun; Texas Monthly.</span>
            </p>
            <p className="resumeText">
  	          Samples of work and references will be produced upon request.
            </p>
            <h3>
              Manager, The Monterey. <br/><br/><span className="resumeDates">10/2010- 06/2013</span>
            </h3>
            <p className="resumeText">
              As the anchor manager for The Monterey, one of the most progressive service and food restaurants in San Antonio, I was responsible for providing an exemplary level of service on a nightly basis to discerning patrons. I also scheduled the entire front of house staff on a two-week rotation and maintained and ordered the beer, wine, non-alcoholic beverage, and service goods (glassware, flatware, paper goods, condiment) inventory. <br/><br/>
              Other duties included, but were not limited to, organizing large format special events, writing and effectively utilizing social media to promote The Monterey via Facebook, Instagram, Twitter, etc., assisting in off-site dinners and events, staff training to augment food, wine, and craft beer knowledge, accurately updating printed menus and the Aloha point-of-sale system on a daily basis, training and hiring new front of house staff, and general restaurant upkeep or minor repairs. Reported directly to the managing partner, Chad Carey.
            </p>
            <p className="resumeText">
  		        Reference: Chad Carey, (210) 849- 3419, <a href="mailto:ccarey@regentcompanies.com">ccarey@regentcompanies.com</a>
            </p>
            <h3>
              Tattooer, Divine Line Tattoos.<br/><br/><span className="resumeDates">09/2005- 08/2010</span>
            </h3>
            <p className="resumeText">
              Tattooed for an extremely reputable and highly regarding tattoo shop. Starting as an apprentice and working up to full-fledged artist after the first year, I earned a higher wage than other artists by maintaining the shop inventory, managing the incoming daily deposits, and ordering all the shop supplies. I also kept accurate records of our clients for Texas Department of Health standards and organized an effective referral system to garner new business.<br/><br/>
              In addition, I managed the social media and photography for the artists. I would routinely travel as the assisting artist to the shop owner and was charged with making all travel reservations and adhering to strict convention schedules and procedures.
            </p>
            <p className="resumeText">
              Reference: Jerry Villalobos, (210) 705- 3104.
            </p>
            <h3>
              Installer/Project manager, CHR Systems.<br/><br/><span className="resumeDates">01/2004- 08/2005</span>
            </h3>
            <p className="resumeText">
              For CHR Systems I installed x-ray imaging equipment and oversaw projects for existing and new imaging rooms, either in stand-alone clinics or in hospitals. This was a highly skilled, precision mechanical job involving specialty tools and I was required to follow strict guidelines for installation and removal of equipment such as fluoroscopic x-ray machines, catheterization laboratory scanning units, magnetic resonance imaging (MRI) scanners, or computed tomography (CT) scanners.
            </p>
            <p className="resumeText">
              Reference: Stephen “Rusty” Jones, (210) 558-8387,  <a href="mailto:rustyjones@chrmedical.com">rustyjones@chrmedical.com</a>
            </p>
          </div>
        </div>
      </div>
      </section>
    )
  }
})
