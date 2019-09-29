
export const placeCountryMatch = (place_name, place_country) => {
    
        if(place_name == place_country ||  place_name == 'England' || place_name == "Scotland" || place_name == "Northern Ireland" || place_name == "Wales" ||
        place_name == 'Anguilla' || place_name == 'Antarctica' || place_name == 'Aruba' || place_name == 'Åland Islands' || place_name == 'Bouvet Island'
      || place_name == 'British Indian Ocean Territory' || place_name == 'Caribbean Netherlands' || place_name == 'Christmas Island'
      || place_name == 'Cocos (Keeling) Islands' || place_name == 'Curaçao' || place_name == 'Falkland Islands (Islas Malvinas)'
      || place_name == 'Faroe Islands' || place_name == 'Federated States of Micronesia'  || place_name == 'French Guiana'
      || place_name == 'French Polynesia' || place_name == 'French Southern and Antarctic Lands' || place_name == 'Gibraltar'
      || place_name == 'Guadeloupe' || place_name == 'Guam' || place_name == 'Heard Island and McDonald Islands'
      || place_name == 'Isle of Man' || place_name == 'Kosovo' || place_name == 'Macau' || place_name == 'Malta'
      || place_name == 'Mayotte' || place_name == 'Monaco' || place_name == 'Montserrat' || place_name == 'New Caledonia'
      || place_name == 'Niue' || place_name == 'Norfolk Island' || place_name == 'Northern Mariana Islands'
      || place_name == 'Pitcairn Islands' || place_name == 'Reunion' || place_name == 'Saint Martin'
      || place_name == 'Saint Pierre and Miquelon' || place_name == 'Saint-Barthélemy' || place_name == 'South Georgia and the South Sandwich Islands'
      || place_name == 'Svalbard and Jan Mayen' || place_name == 'The Bahamas' || place_name == 'The Gambia' || place_name == 'Timor-Leste'
      || place_name == 'Tokelau' || place_name == 'Turks and Caicos Islands' || place_name == 'U.S. Virgin Islands'
      || place_name == 'United States Minor Outlying Islands' || place_name == 'Vatican City'
      || place_name == 'Singapore' ){
        return true;
      }
      else{
        return false;
      }

}



export const placeProvinceMatch = (place_name, place_province) => {
    return place_name == place_province ? true : false
}

export const placeCountyMatch = (place_name, place_county) => {
    return place_name == place_county ? true : false
}

export const countyProvinceMatch = (place_county, place_province) => {
    return place_county == place_province ? true : false
}