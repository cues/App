import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import style from '../../Styles/Styles'; 

import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText               :   state.themes.menuText,
  };
};


class Terms extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      ACCEPTANCE
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      By accessing or using the TIDNGZ website, you accept and agree to be bound to any terms that are stated in this agreement. Any participation in this service will constitute acceptance of this agreement. These terms of use affect your legal rights and obligations. Your access to and use of the services are conditioned on your acceptance of and compliance with these Terms. If you do not agree to abide by the above, please do not use this service. We may amend our Terms of Service or Privacy Policy and may notify you when we do so, but its your responsibility to keep yourself updated with our terms as long as you use our services.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      BASIC USAGE
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      1. You must not post any misleading information, which may include fake news, pornography, and general fun stories. If your being reported of wrong news, a check would be done by our team, if found guilty there will be one warning and furthermore not abiding with this term will result in closure of your account and there will be no compromise or exceptions.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      2. You are solely responsible for any content you post on TIDNGZ, and for and future consequences.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      3. You will not create an account for any other person other than yourself with the exception of people or businesses, that you are expressly authorized to create accounts on behalf of their employers or clients.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      4. You take full responsibility that all the information you provide at any time while using TIDNGZ, this included the registration process, is true, accurate and current and agree to update these information at any time in order to maintain its truth and accuracy.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      5. You are solely responsible for your conduct and any data, text, information, images, video clips, links and other content or materials that you submit, post or display on or via the Service.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      6. Haters or violence in relation to Religion, Race, Gender, Age, Ethnic origin, Sex, Disability will not be tolerated. This will lead into closure of your account if not resolved with peaceful measures.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      7. Don't post gore just to be shocking. Don't showcase the mutilation or torture of human beings, animals, or their remains if its not a real story that require public awareness.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      8. Do not post misleading link in order to sell or mislead another user into contents which one in not aware while the link is being clicked. Be truthful to any links provided with the posted news. Fraudulent links provide and that are being reported will result into closure of your account with or without any prior warning as what’s felt best by our staff. Again there is no compromise or exceptions.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      9. Spams wont be tolerated, so please don't spam people, make spam posts, or post spam replies. Don't put tags on your posts that will mislead or deceive searchers. Also don’t use irrelevant tags. Dont use deceptive means to generate revenue or traffic, with the primary purpose of affiliate marketing. Unwanted email, comments, likes or other forms of commercial or harassing communications to any users of TIDNGZ will not be tolerated and could lead into closure of your account.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      10. You must not create accounts with the Service through unauthorized means, including but not limited to, by using an automated device, script, bot, spider, crawler or scraper.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      YOUR CONTENT
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      TIDNGZ does not claim ownership of any Content that you post on or through the Service. Instead, you hereby grant TIDNGZ a non-exclusive, fully paid and royalty-free, transferable, sub-licensable, worldwide license to use the Content that you post on or through the Service.                    
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      1. TIDNGZ allows you to post your side of a news story, which is reported exclusively by you. You retain all rights and are solely responsible for any Images, Links, Information or Video posted by you.                    
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      2. You grant TIDNGZ and any of our users to use any of you data for the purpose of mass awareness.                    
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      3. We may modify or adapt your Content in order to transmit, display or distribute it over computer networks and in various media and/or make changes to your Content as necessary to conform and adapt that Content to any requirements or limitations of any networks, devices, services or media.                    
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      4. If you delete your account, all your data will be delete including messages, likes, comments, posts etc.                    
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      5. If you provide us feedback in relation to better TIDNGZ, you accept that we are free to use the information without any compensation to you.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      6. You agree not to post any Content that infringes on the intellectual property rights or legal rights of third parties or other users.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      PASSWORD
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      You are solely responsible for safeguarding your password at all times. If you feel that someone else is using your account you should change your password or else if you cant access you account you can drop us an email letting us know the issue being faced and both of us can try to resolve it, in accordance to the policies of our company. We suggest you to use a strong password. We will not be liable for any loss or damage arising from your failure in securing you password.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      PRIVACY
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      Your privacy is quite important to us and our privacy policy is designed to show how about you can use TIDNGZ to report news that’s happening around you and how we collect and can use your content and information. We encourage you to read our Privacy Policy and to use it so you can make better informed decisions.                    
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      USING TIDNGZ SAFELY
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      1. You will not use our service to post any false, unlawful, invasive, threatening, misleading, fraudulent, defamatory, harassing, inflammatory Content.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      2. You may not impersonate others through the use of our service in a manner that does or is intended to mislead, confuse, or deceive others.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      3. You may not use our service for any unlawful purposes or in furtherance of illegal activities. All users irrespective from which country, agree to comply with all local laws regarding online conduct and acceptable content.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      4. You agree to provide truthful and accurate content.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      5. You will not collect users content or information, or otherwise access TIDNGZ, using automated means (such as harvesting bots, robots, spiders, or scrapers) ever.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      6. You agree not to upload any virus or any other malicious codes.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      7. You agree not to violet any of our policies, regulations, requirements or procedures.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      8. Users using business names and logos to mislead others will have their account suspended.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      9. You may not post any intimate or naked photos of other in order to generated viewers without the consent of the people being involved even if it’s some sort of news.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      10. You will not use account information belonging to someone else to login.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      11. You may not publish or post threats of violence against others or promote violence against others.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      12. You may not post articles encouraging self-harm of any sort which included anorexia, suicide etc.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      13. You may not use logos of TIDNGZ in any form to display your profile picture, which falsely implies association with TIDNGZ.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      14. We take copyright infringement very seriously and shall respond to every infringement.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      15. You will not do anything that could disable, overburden, or impair the proper working or appearance of TIDNGZ, such as a denial of service attack or interference with page rendering or other TIDNGZ functionality, including the de-indexing or de-caching of any portion of our Site from a thirty party’s website, such as by requesting its removal from a search engine.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      16. You will not attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or form the servers running any of our services.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      17. Your use of our site and services is subject to various restrictions designed to protect the online services and our users.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      18. You will not post any content that infringes/violets other peoples rights.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      19. You will not support or encourage in any violation of any of our policies.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      COPRIGHT OR TRADEMARK INFRIGMENT
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      TIDNGZ respects the intellectual property rights of others and we expect you as well do the same. If you’re not allowed to produce other people work please do not post it. We respond to any notice of such kind of infringement as per our Terms of services, though any user asserting a copyright infringement should prove the same. Any such user who thinks his work has been copied should provide the necessary documents that will be stated during our communication.
                    </Text>

                    <View style={style.line}/>
                    
                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      LINKS
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      TIDNGZ has a lot of links to other websites and resources operated by third parties. These have their own terms and privacy and we ask you to review them before using their services. All access of these services from your side will be at your own risk and we do not accept any responsibility.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      AMENDMENTS
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      We shall notify you of any changes made to our terms and policies and give you the opportunity to review it before continuing to use our services. Your use of our services thereafter constitutes your acceptance of all the amended terms and policies.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                      TERMINATION
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} , style.la]}>
                      We can and will terminate part or the enter service to you at any time, if we find violations done by you in using our services. Thereafter you have the right to ask for any such reason and discuss how we can resolve the matter in a very pleasing and peaceful manner.
                     </Text>

              </View>
            </ScrollView>

          <Header/>

       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner:{
      margin:10,
    },
  });
  

  export default connect(state)(Terms);