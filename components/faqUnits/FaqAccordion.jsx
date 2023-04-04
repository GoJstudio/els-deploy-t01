import { useState } from 'react';

import { FaChevronCircleDown } from "react-icons/fa";

import styles from '@/styles/components/faqUnits/faqAccordion.module.scss';

const FaqAccordion = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  
  return (
    <div className={styles.faqAccordion}>
      <div className={styles.headline}>
        <h4>{ props.title }</h4>
        <FaChevronCircleDown
          onClick={handleClick}
          className={`${styles.arrow} ${open ? styles.up : styles}`}
        />
      </div>

      <div className={`${styles.desc} ${open ? styles.open : styles}`}>
        <hr />
        <p>{ props.desc } This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more detail and make sure the user understands everything</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius quibusdam magni voluptate culpa vitae dolorum eligendi? Illum officia repellat asperiores accusamus deserunt labore obcaecati ab recusandae ex amet, sapiente earum neque numquam vitae molestias perspiciatis adipisci explicabo! Delectus quos dolor repellendus minus esse vitae distinctio voluptas quas numquam nulla.</p>
      </div>
    </div>
  );
}

export default FaqAccordion