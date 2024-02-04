import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => (
  <section className={`${layout.sectionReverse} relative`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easy control your
        <br className="sm:black hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi
        asperiores, ipsam ullam doloremque possimus facere necessitatibus
        pariatur inventore cumque obcaecati at quae eaque consequuntur.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
        <img
          src={apple}
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          className="w-[128px] h-[42px] object-contain  cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
