import styles from './CommentCard.module.css';


import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const CommentCard= (props: any) => {
  function generateArrayWithOnesAndZeros(n: number) {
    const onesCount = n;
    const zerosCount = 5 - n;
    const onesArray = new Array(onesCount).fill(1);
    const zerosArray = new Array(zerosCount).fill(0);
    return onesArray.concat(zerosArray);
  }

  return (
    <div className={styles.card}>
      <img src={props.imgUrl} className={styles.pfp} alt="" />
      <div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.loc}>
          {props.location} | {props.date}
        </div>
        <div className={styles.rating}>
          {generateArrayWithOnesAndZeros(props.rate).map((value, index) => (
            <span key={index} className={value === 1 ? styles.starFilled : styles.starEmpty}>
              {value === 1 ? <FaStar className='text-red-500'/> : <FaRegStar className='text-red-500'/>}
            </span>
          ))}
        </div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default CommentCard;