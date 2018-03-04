import React, {Component} from 'react';
import './App.css';

class About extends Component {
	render(){
		return(
			<div>
				<div className = "container">
					<div className = "clearfix">
						<img className = "float-right" src= "http://www.escolaenglishcenter.com.br/images/logo_english_center2.png" />
						<div  className =  "textAbout"> 
							<h5> OUR MISSION </h5>
							<p>	
								The English Language Center 
								has been dedicated to providing 
								English programs of the highest quality 
								to international students.  
								By employing highly qualified and dedicated 
								instructors and by utilizing a dynamic and 
								comprehensive curriculum, our center provides 
								the perfect environment for rapid language 
								improvement.  ELC also offers students extensive 
								upport services to ensure that their are 
								educationally 
								enriching.
							</p>
						</div>
					</div>
				</div>
				<div className = "footer"> 
					<h5 className = "contactUs"> Contacts us </h5>
					<div className = "icons">
						<a href = "https://www.facebook.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/1_Media_social_website_facebook-256.png" />
						</a>
						<a href = "https://www.twitter.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/12_Media_social_website_Twitter-256.png" />
						</a>
						<a href = "https://www.instagram.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/2_Media_social_website_instagram-256.png" />
						</a>
					</div>
					<div className = "icons">
						E-mail address: zhaziraun@gmail.com
					</div>
				</div>
			</div>
			);
	}

}

export default About;