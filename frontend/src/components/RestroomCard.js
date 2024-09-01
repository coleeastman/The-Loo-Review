import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import haydenImg from '../images/hayden-library.jpg';
import defaultImg from '../images/default-image.jpeg'; // Ensure you have a default image

// Import all images explicitly
import armstrongHallImg from '../images/Armstrong Hall.jpeg';
import artBuildingImg from '../images/Art Building.jpeg';
import asuImg from '../images/asu-img.jpeg';
import biodesignAImg from '../images/Biodesign Institute A.jpeg';
import biodesignBImg from '../images/Biodesign Institute B.jpeg';
import bookstoreImg from '../images/Bookstore.jpeg';
import brickyardImg from '../images/Brickyard Engineering.jpeg';
import bulldogHallImg from '../images/Bulldog Hall.jpeg';
import businessAdminCImg from '../images/Business Administration C.jpeg';
import businessAdminImg from '../images/Business Administration.jpeg';
import collegeAvenueCommonsImg from '../images/College Avenue Commons.jpeg';
import cowdenFamilyResourcesImg from '../images/Cowden Family Resources.jpeg';
import creativityCommonsImg from '../images/Creativity Commons.jpeg';
import designNorthImg from '../images/Design North.jpeg';
import designSouthImg from '../images/Design South.jpeg';
import discoveryHallImg from '../images/Discovery Hall.jpeg';
import durhamHallImg from '../images/Durham Hall.jpeg';
import engineeringCenterImg from '../images/Engineering Center.jpeg';
import engineeringResearchCenterImg from '../images/Engineering Research Center.jpeg';
import farmerEducationImg from '../images/Farmer Education.jpeg';
import gammageImg from '../images/Gammage.webp';
import goldwaterCenterImg from '../images/Goldwater Center.jpeg';
import haydenLibraryImg from '../images/hayden-library.jpg';
import healthServiceBuildingImg from '../images/Health Service Building.jpeg';
import interdisciplinaryAImg from '../images/Interdisciplinary A.jpeg';
import interdisciplinaryBImg from '../images/Interdisciplinary B.jpeg';
import istb1Img from '../images/ISTB1.jpeg';
import istb2Img from '../images/ISTB2.jpeg';
import istb4Img from '../images/ISTB4.jpeg';
import istb5Img from '../images/ISTB5.jpeg';
import istbxImg from '../images/ISTBX.jpeg';
import lattieCoorHallImg from '../images/Lattie F. Coor Hall.jpeg';
import lifeSciencesAImg from '../images/Life Sciences A.jpeg';
import lifeSciencesBImg from '../images/Life Sciences B.jpeg';
import lifeSciencesCImg from '../images/Life Sciences C.jpeg';
import lifeSciencesDImg from '../images/Life Sciences D.jpeg';
import matthewCenterImg from '../images/Matthew Center.webp';
import mccordHallImg from '../images/McCord Hall.webp';
import memorialUnionImg from '../images/Memorial Union.jpeg';
import murdockHallImg from '../images/Murdock Hall.jpeg';
import musicBuildingImg from '../images/Music Building.jpeg';
import neebHallImg from '../images/Neeb Hall.jpeg';
import nelsonFineArtsCenterImg from '../images/Nelson Fine Arts Center.jpeg';
import nobleLibraryImg from '../images/Noble Library.jpeg';
import oldMainImg from '../images/Old Main.jpeg';
import payneHallImg from '../images/Payne Hall.jpeg';
import batemanImg from '../images/Physical Sciences Center.jpeg';
import psychologyNorthImg from '../images/Psychology North.jpeg';
import psychologyImg from '../images/Psychology.jpeg';
import rossBlakleyHallImg from '../images/Ross-Blakley Hall.jpeg';
import schoolHumanEvolutionImg from '../images/School of Human Evolution and Social Change.jpeg';
import scobImg from '../images/SCOB.jpeg';
import socialSciencesImg from '../images/Social Sciences.jpeg';
import staufferCommunicationArtsImg from '../images/Stauffer Communication Arts.jpeg';
import studentServicesBuildingImg from '../images/Student Services Building.jpeg';
import sunDevilHallImg from '../images/Sun Devil Hall.jpeg';
import universityClubImg from '../images/University Club.jpeg';
import urbanSystemsEngineeringImg from '../images/Urban Systems Engineering.jpeg';
import waltonCenterImg from '../images/Walton Center.jpeg';

const imageMap = {
  'ARMSTRONG HALL': armstrongHallImg,
  'ART BUILDING': artBuildingImg,
  'ASU IMG': asuImg,
  'BIODESIGN INSTITUTE A': biodesignAImg,
  'BIODESIGN INSTITUTE B': biodesignBImg,
  'BOOKSTORE': bookstoreImg,
  'BRICKYARD ENGINEERING': brickyardImg,
  'BULLDOG HALL': bulldogHallImg,
  'BUSINESS ADMINISTRATION C': businessAdminCImg,
  'BUSINESS ADMINISTRATION': businessAdminImg,
  'COLLEGE AVENUE COMMONS': collegeAvenueCommonsImg,
  'COWDEN FAMILY RESOURCES': cowdenFamilyResourcesImg,
  'CREATIVITY COMMONS': creativityCommonsImg,
  'DESIGN NORTH': designNorthImg,
  'DESIGN SOUTH': designSouthImg,
  'DISCOVERY HALL': discoveryHallImg,
  'DURHAM HALL': durhamHallImg,
  'ENGINEERING CENTER': engineeringCenterImg,
  'ENGINEERING RESEARCH CENTER': engineeringResearchCenterImg,
  'FARMER EDUCATION': farmerEducationImg,
  'GAMMAGE': gammageImg,
  'GOLDWATER CENTER': goldwaterCenterImg,
  'HAYDEN LIBRARY': haydenLibraryImg,
  'HEALTH SERVICE BUILDING': healthServiceBuildingImg,
  'INTERDISCIPLINARY A': interdisciplinaryAImg,
  'INTERDISCIPLINARY B': interdisciplinaryBImg,
  'ISTB1': istb1Img,
  'ISTB2': istb2Img,
  'ISTB4': istb4Img,
  'ISTB5': istb5Img,
  'ISTBX': istbxImg,
  'LATTIE F. COOR HALL': lattieCoorHallImg,
  'LIFE SCIENCES A': lifeSciencesAImg,
  'LIFE SCIENCES B': lifeSciencesBImg,
  'LIFE SCIENCES C': lifeSciencesCImg,
  'LIFE SCIENCES D': lifeSciencesDImg,
  'MATTHEW CENTER': matthewCenterImg,
  'MCCORD HALL': mccordHallImg,
  'MEMORIAL UNION': memorialUnionImg,
  'MURDOCK HALL': murdockHallImg,
  'MUSIC BUILDING': musicBuildingImg,
  'NEEB HALL': neebHallImg,
  'NELSON FINE ARTS CENTER': nelsonFineArtsCenterImg,
  'NOBLE LIBRARY': nobleLibraryImg,
  'OLD MAIN': oldMainImg,
  'PAYNE HALL': payneHallImg,
  'PHYSICAL SCIENCES CENTER': batemanImg,
  'PSYCHOLOGY NORTH': psychologyNorthImg,
  'PSYCHOLOGY': psychologyImg,
  'ROSS-BLAKLEY HALL': rossBlakleyHallImg,
  'SCHOOL OF HUMAN EVOLUTION AND SOCIAL CHANGE': schoolHumanEvolutionImg,
  'SCOB': scobImg,
  'SOCIAL SCIENCES': socialSciencesImg,
  'STAUFFER COMMUNICATION ARTS': staufferCommunicationArtsImg,
  'STUDENT SERVICES BUILDING': studentServicesBuildingImg,
  'SUN DEVIL HALL': sunDevilHallImg,
  'UNIVERSITY CLUB': universityClubImg,
  'URBAN SYSTEMS ENGINEERING': urbanSystemsEngineeringImg,
  'WALTON CENTER': waltonCenterImg,
};

const RestroomCard = ({ restroom }) => {
  const [reviewCount, setReviewCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restroom/${restroom._id}`);
  };

  useEffect(() => {
    const fetchRestroomReviewCount = async () => {
      try {
        const response = await fetch(`https://the-loo-review.onrender.com/api/restroomReviewCount/${restroom.restroom}`);
        const json = await response.json();

        if (response.ok) {
          setReviewCount(json.restroomReviewCount);
        } else {
          console.error("Failed to fetch review count:", json.message);
        }
      } catch (error) {
        console.error("Error fetching review count:", error);
      }
    };

    fetchRestroomReviewCount();
  }, [restroom.restroom]);

  // Use the image map to get the corresponding image or fall back to the default image
  const restroomImage = imageMap[restroom.restroom.toUpperCase()] || defaultImg;

  return (
    <div className="restroom-card" onClick={handleClick}>
      <div className="building-image-container">
        <img src={restroomImage} id="building-img" alt={restroom.restroom} />
      </div>
      <div className="restroom-card-info">
        <div className="restroom-card-stats">
          <p className="restroom-stars">
            {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
          </p>
        </div>
        <h4 className="restroom-title">{restroom.restroom}</h4>
      </div>
    </div>
  );
};

export default RestroomCard;