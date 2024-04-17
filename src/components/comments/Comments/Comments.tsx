import styles from './Comments.module.css';
import pfp1 from "../../../assets/pfp/a0d24ee8a2573ce39911ae32c42177d7.jpg"
import pfp2 from "../../../assets/pfp/c51187040833102b8e000d3c3f537011.jpg"
import pfp3 from "../../../assets/pfp/CDG_2021-22_Deal_Chasity-scaled_400x400_acf_cropped-1.jpg"
import CommentCard from "../CommentCard/CommentCard.tsx"

const users = [
  {
    imgUrl: pfp1,
    name: 'Yifei Chen',
    location: 'Seoul, South Korea',
    date: 'April 2019',
    rate: 4,
    text: 'What a great experience using GastroHeaven! I booked all of my food for my gap year through GastroHeaven and never had any issues.',
  },
  {
    imgUrl: pfp2,
    name: 'Anthony Lewis',
    location: 'Honolulu, Hawaii',
    date: 'February 2020',
    rate: 5,
    text: 'My family and I visit Hawaii every year, and we usually book our restaurant using other services. GastroHeaven was recommened to us by a long time friend',
  },
  {
    imgUrl: pfp3,
    name: 'Kaori Yamaguchi',
    location: 'Berlin, Germany',
    date: 'April 2022',
    rate: 4,
    text: 'When I was looking to order my food to Berlin from LAX,  GastroHeaven had the best browsing experiece so I figured I’d give it a try.',
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <h3 className={styles.title}>
        What <span className={styles.title__span}>GastroHaven</span> users are saying
      </h3>
      <div className={styles.comments__posts}>
        {users.map((user:any, index:number) => (
            <CommentCard key={index} {...user} />
        ))}
      </div>
     
    </div>
  );
};

export default Comments;